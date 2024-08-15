import { ImoneylenderDTO } from "../../interface/Imoneylender";
import { CreateMoneyUseCase } from "./createMoneyUseCase";
import { NextFunction, Request, Response } from "express";
import { validationCreateMoneySchema } from "../../validation/validationMoney";
import { z } from "zod";
import { ResponseSuccess } from "../../../../utils/ResponseSuccess";

class CreateMoneyController {
	constructor(private createMoneyUseCase: CreateMoneyUseCase) {}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const data = req.body;
			const parseData = validationCreateMoneySchema.parse(data);
			const result = await this.createMoneyUseCase.execute(parseData);
			res.status(200);
		} catch (error) {
			next(error);
		}
	}
}

export { CreateMoneyController };

