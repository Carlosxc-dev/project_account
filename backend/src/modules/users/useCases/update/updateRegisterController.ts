import { UpdateRegisterUseCase } from "./UpdateRegisterUseCase";
import { Request, Response } from "express";
import { validationUpdateUserSchema } from "../../validation/validationUser";

class UpdateRegisterController {
	constructor(private updateRegisterUseCase: UpdateRegisterUseCase) {}

	public async handle(req: Request, res: Response) {
		const data = req.body;

		const parseData = validationUpdateUserSchema.parse(data);

		await this.updateRegisterUseCase
			.execute(parseData)
			.then((response) => {
				return res.status(201).send({
					message: "usuario update com sucesso",
					data: response,
				});
			})
			.catch((err) => {
				return res.status(400).send({
					message: "erro no servidor",
					data: err,
				});
			});
	}
}

export { UpdateRegisterController };

