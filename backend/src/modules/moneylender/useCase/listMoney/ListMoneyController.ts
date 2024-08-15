import { ResponseSuccessMoney } from "../../../../utils/ResponseSuccessMoney";
import { ListMoneyUseCase } from "./listMoneyUseCase";
import { NextFunction, Request, Response } from "express";

class ListMoneyController {
	constructor(private listMoneyUseCase: ListMoneyUseCase) {}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { userId } = req.body;
			const result = await this.listMoneyUseCase.execute(userId);
			res.status(ResponseSuccessMoney.operationCompleted.statusCode).json({
				message: ResponseSuccessMoney.operationCompleted.message,
				data: result,
			});
		} catch (error) {
			next(error);
		}
	}
}

export { ListMoneyController };

