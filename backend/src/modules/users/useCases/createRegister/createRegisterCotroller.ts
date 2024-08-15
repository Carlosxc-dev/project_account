import { NextFunction } from "express";
import { CreateRegisterUseCase } from "./createRegisterUseCase";
import { validationCreateUserSchema } from "../../validation/validationUser";
import { Request, Response } from "express";
import { ResponseSuccess } from "../../../../utils/ResponseSuccess";

class CreateRegisterController {
	private createRegisterUseCase: CreateRegisterUseCase;

	constructor(createRegisterUseCase: CreateRegisterUseCase) {
		this.createRegisterUseCase = createRegisterUseCase;
	}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const data = req.body;
			const parseData = validationCreateUserSchema.parse(data);
			const result = await this.createRegisterUseCase.execute(parseData);
			return res
				.status(ResponseSuccess.userCreated.statusCode)
				.json({ message: ResponseSuccess.userCreated.message, data: result });
		} catch (error) {
			next(error); // Passa o erro para o middleware de tratamento de erros
		}
	}
}

export { CreateRegisterController };

