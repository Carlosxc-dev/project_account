import { UpdateRegisterUseCase } from "./UpdateRegisterUseCase";
import { Request, Response } from "express";

class UpdateRegisterController {
	constructor(private updateRegisterUseCase: UpdateRegisterUseCase) {}

	public async handle(req: Request, res: Response) {
		const data = req.body;

		data.password = parseInt(data.password); //muda de string para inteiro
		console.log(data);

		await this.updateRegisterUseCase
			.execute(data)
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
