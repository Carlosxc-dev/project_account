import { DeleteRegisterUseCase } from "./deleteRegisterUseCase";
import { NextFunction, Request, Response } from "express";
import { validationDeleteUserSchema } from "../../validation/validationUser";
import { ResponseSuccess } from "../../../../utils/ResponseSuccess";

class DeleteRegisterController {
	constructor(private listRegisterUseCase: DeleteRegisterUseCase) {}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.body;
			const parseId = validationDeleteUserSchema.parse(id);
			const resp = await this.listRegisterUseCase.execute(parseId.id);
			return res
				.status(ResponseSuccess.userDeleted.statusCode)
				.json({ message: ResponseSuccess.userDeleted.message, data: resp });
		} catch (error) {
			next(error);
		}
	}
}

export { DeleteRegisterController };

