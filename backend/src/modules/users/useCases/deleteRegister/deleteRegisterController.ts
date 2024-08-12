import { IRegisterDTO } from "../../interface/IRegister";
import { DeleteRegisterUseCase } from "./deleteRegisterUseCase";
import { Request, Response } from "express";
import { validationDeleteUserSchema } from "../../validation/validationUser";
import { z } from "zod";

class DeleteRegisterController {
	constructor(private listRegisterUseCase: DeleteRegisterUseCase) {}

	public async handle(req: Request, res: Response) {
		const id = req.body;

		const parseId = validationDeleteUserSchema.parse(id);

		await this.listRegisterUseCase
			.execute(parseId.id)
			.then((data) => {
				return res.status(201).json({
					message: "user delete sucess!!",
					user: data,
				});
			})
			.catch((err) => {
				return res.status(400).json({
					message: "erro deletar user not exist",
					err: err,
				});
			});
	}
}

export { DeleteRegisterController };

