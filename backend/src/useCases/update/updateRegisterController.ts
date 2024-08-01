import { UpdateRegisterUseCase } from "./UpdateRegisterUseCase";
import { Request, Response } from "express";

class UpdateRegisterController {
	constructor(private updateRegisterUseCase: UpdateRegisterUseCase) {}

	public async handle(req: Request, res: Response) {
		const data = req.body;

		await this.updateRegisterUseCase
			.execute(data)
			.then((response) => {
				return res.status(201).send({
					message: "usuario update com sucesso",
					data: response,
				});
			})
			.catch((err) => {
				throw new Error(err);
			});
	}
}

export { UpdateRegisterController };

