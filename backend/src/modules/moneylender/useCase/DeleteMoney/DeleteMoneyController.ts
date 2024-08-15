import { ResponseSuccessMoney } from "../../../../utils/ResponseSuccessMoney";
import { DeleteMoneyUseCase } from "./DeleteMoneyUseCase";
import { NextFunction, Request, Response } from "express";

class DeleteMoneyController {
	constructor(private deleteMoneyUseCase: DeleteMoneyUseCase) {}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.body;
			const result = await this.deleteMoneyUseCase.execute(id);
			res.status(ResponseSuccessMoney.moneyDeleted.statusCode).json({
				message: ResponseSuccessMoney.moneyDeleted.message,
				data: result,
			});
		} catch (error) {
			next(error);
		}
	}
}

export { DeleteMoneyController };

