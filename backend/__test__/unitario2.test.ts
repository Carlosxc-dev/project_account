import { CreateRegisterController } from "../src/modules/users/useCases/createRegister/createRegisterCotroller";
import { CreateRegisterUseCase } from "../src/modules/users/useCases/createRegister/createRegisterUseCase";
import { RegisterRepository } from "../src/modules/users/repository/RegisterRepository";
import { IRegisterDTO } from "../src/modules/users/interface/IRegister";
import { NotFoundError } from "../src/err/NotFoundError";
import { Request, Response } from "express";
import { mockRequest, mockResponse } from "jest-mock-req-res";

describe("Create user failure", () => {
	let createRegisterController: CreateRegisterController;
	let mockReq: Request;
	let mockRes: Response;
	let mockNext: jest.Mock;

	beforeAll(() => {
		const registerRepository = RegisterRepository.getInstance(); // Singleton pattern to avoid multiple instances of the same class

		// Mock the behavior of the repository to simulate a user already existing
		jest.spyOn(registerRepository, "findbyusername").mockResolvedValue({
			name: "Test Name",
			email: "test@test.com.br",
			password: "existingpassword",
		} as IRegisterDTO);

		const createRegisterUseCase = new CreateRegisterUseCase(registerRepository);
		createRegisterController = new CreateRegisterController(createRegisterUseCase);

		// Mocks
		mockReq = mockRequest();
		mockRes = mockResponse();
		mockNext = jest.fn();
	});

	it("should return error when user already exists", async () => {
		const userData: IRegisterDTO = {
			name: "Test Name",
			email: "test@test.com.br",
			password: "testusername",
		};

		// Simulate request body
		mockReq.body = userData;

		// Simulate the response behavior
		mockRes.status = jest.fn().mockReturnThis();
		mockRes.json = jest.fn().mockReturnThis();

		// Call the handle method
		await createRegisterController.handle(mockReq, mockRes, mockNext);

		// Check that the error handler was called with NotFoundError
		expect(mockNext).toHaveBeenCalledWith(expect.any(NotFoundError));

		// Check that the response was not sent directly in this case
		expect(mockRes.status).not.toHaveBeenCalled();
		expect(mockRes.json).not.toHaveBeenCalled();
	});
});

