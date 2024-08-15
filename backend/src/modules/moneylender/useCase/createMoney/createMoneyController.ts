import { CreateMoneyUseCase } from "./createMoneyUseCase";
import { NextFunction, Request, Response } from "express";
import { validationCreateMoneySchema } from "../../validation/validationMoney";
import { ResponseSuccessMoney } from "../../../../utils/ResponseSuccessMoney";

class CreateMoneyController {
	constructor(private createMoneyUseCase: CreateMoneyUseCase) {}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const data = req.body;
			const parseData = validationCreateMoneySchema.parse(data);
			const result = await this.createMoneyUseCase.execute(parseData);
			res.status(ResponseSuccessMoney.moneyCreated.statusCode).json({
				message: ResponseSuccessMoney.moneyCreated.message,
				data: result,
			});
		} catch (error) {
			next(error);
		}
	}
}

export { CreateMoneyController };

