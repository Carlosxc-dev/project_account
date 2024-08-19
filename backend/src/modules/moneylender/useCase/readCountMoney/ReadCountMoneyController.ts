import { ResponseSuccessMoney } from "../../../../utils/ResponseSuccessMoney";
import { ReadCountMoneyUseCase } from "./ReadCountMoneyUseCase";
import { NextFunction, Request, Response } from "express";

class ReadCountMoneyController {
	constructor(private readCountMoneyUseCase: ReadCountMoneyUseCase) {}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const { userId } = req.body;

			const result = await this.readCountMoneyUseCase.execute(userId);

			res.status(ResponseSuccessMoney.operationCompleted.statusCode).json({
				message: ResponseSuccessMoney.operationCompleted.message,
				data: result,
			});
		} catch (error) {
			next(error);
		}
	}
}

export { ReadCountMoneyController };

