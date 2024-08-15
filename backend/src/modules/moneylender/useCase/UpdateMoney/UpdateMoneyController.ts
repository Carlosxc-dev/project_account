import { ResponseSuccessMoney } from "../../../../utils/ResponseSuccessMoney";
import { ImoneylenderDTO } from "../../interface/Imoneylender";
import { UpdateMoneyUseCase } from "./UpdateMoneyUseCase";
import { NextFunction, Request, Response } from "express";

class UpdateMoneyController {
	constructor(private updateMoneyUseCase: UpdateMoneyUseCase) {}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const data: ImoneylenderDTO = req.body;
			const result = await this.updateMoneyUseCase.execute(data);
			res.status(ResponseSuccessMoney.moneyUpdated.statusCode).json({
				message: ResponseSuccessMoney.moneyUpdated.message,
				data: result,
			});
		} catch (error) {
			next(error);
		}
	}
}

export { UpdateMoneyController };

