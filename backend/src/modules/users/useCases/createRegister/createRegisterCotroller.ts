import { NextFunction, Request, Response } from "express";
import { CreateRegisterUseCase } from "./createRegisterUseCase";
import { validationCreateUserSchema } from "../../validation/validationUser";
import { z } from "zod";
import { NotFoundError, ValidationError } from "../../../../err/Error";

class CreateRegisterController {
	private createRegisterUseCase: CreateRegisterUseCase;

	//constructor(private createRegisterUseCase: CreateRegisterUseCase){}		outro modo de fazer
	constructor(createRegisterUseCase: CreateRegisterUseCase) {
		this.createRegisterUseCase = createRegisterUseCase;
	}

	public handle(req: Request, res: Response, next: NextFunction) {
		try {
			const data = req.body;
			const parseData = validationCreateUserSchema.parse(data); //validação dos dados
			this.createRegisterUseCase.execute(parseData);
			return res.status(201).json({ message: "user made sucess !!", data: data });
		} catch (error) {
			next(error);
		}
	}
}

export { CreateRegisterController };

