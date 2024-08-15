import { UpdateRegisterUseCase } from "./UpdateRegisterUseCase";
import { NextFunction, Request, Response } from "express";
import { validationUpdateUserSchema } from "../../validation/validationUser";
import { ResponseSuccess } from "../../../../utils/ResponseSuccess";

class UpdateRegisterController {
	constructor(private updateRegisterUseCase: UpdateRegisterUseCase) {}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const data = req.body;
			const parseData = validationUpdateUserSchema.parse(data);
			const result = await this.updateRegisterUseCase.execute(parseData);
			res.status(ResponseSuccess.userUpdated.statusCode).json({
				message: ResponseSuccess.userUpdated.message,
				data: result,
			});
		} catch (error) {
			next(error);
		}
	}
}

export { UpdateRegisterController };

