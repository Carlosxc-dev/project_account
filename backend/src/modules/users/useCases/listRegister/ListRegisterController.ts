import { ResponseSuccess } from "../../../../utils/ResponseSuccess";
import { ListRegisterUseCase } from "./ListRegisterUseCase";
import { Request, Response, NextFunction } from "express";

class ListRegisterController {
	constructor(private listRegisterUseCase: ListRegisterUseCase) {}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const result = await this.listRegisterUseCase.execute();
			return res
				.status(ResponseSuccess.operationCompleted.statusCode)
				.json({ message: ResponseSuccess.operationCompleted.message, data: result });
		} catch (error) {
			next(error);
		}
	}
}

export { ListRegisterController };

