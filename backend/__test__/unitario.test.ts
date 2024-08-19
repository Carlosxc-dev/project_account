import { CreateRegisterController } from "../src/modules/users/useCases/createRegister/createRegisterCotroller";
import { CreateRegisterUseCase } from "../src/modules/users/useCases/createRegister/createRegisterUseCase";
import { RegisterRepository } from "../src/modules/users/repository/RegisterRepository";
import { IRegisterDTO } from "../src/modules/users/interface/IRegister";
import { Request, Response } from "express";
import { mockRequest, mockResponse } from "jest-mock-req-res";

describe("Create user", () => {
	let createRegisterController: CreateRegisterController;
	let mockReq: Request;
	let mockRes: Response;
	let mockNext: jest.Mock;

	beforeAll(() => {
		const registerRepository = RegisterRepository.getInstance(); // Singleton pattern to avoid multiple instances of the same class
		const createRegisterUseCase = new CreateRegisterUseCase(registerRepository);
		createRegisterController = new CreateRegisterController(createRegisterUseCase);

		// Mocks
		mockReq = mockRequest();
		mockRes = mockResponse();
		mockNext = jest.fn();
	});

	it("should be able to create a new user", async () => {
		const userData: IRegisterDTO = {
			name: "Test Name3",
			email: "test3@test.com.br",
			password: "testusername",
		};

		// Simulate request body
		mockReq.body = userData;

		// Simulate the response behavior
		mockRes.status = jest.fn().mockReturnThis();
		mockRes.json = jest.fn().mockReturnThis();

		// Call the handle method
		await createRegisterController.handle(mockReq, mockRes, mockNext);

		// Check that the status was called with 201
		expect(mockRes.status).toHaveBeenCalledWith(202);
		expect(mockRes.json).toHaveBeenCalledWith(
			expect.objectContaining({
				message: "User created successfully!",
				data: expect.objectContaining({
					name: userData.name,
					email: userData.email,
				}),
			})
		);
	});
});
