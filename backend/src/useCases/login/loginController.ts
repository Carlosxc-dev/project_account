import { LoginUseCase } from "./loginUseCase";
import { Request, Response } from "express";

class LoginController {
	constructor(private loginUseCase: LoginUseCase) {}

	public async handle(req: Request, res: Response) {
		const data = req.body;

		await this.loginUseCase
			.execute(data)
			.then((response) => {
				if (!response) {
					return res.status(400).send({
						message: "user nao encontrado",
					});
				}
				return res.status(201).send({
					message: "usuario logado com sucesso",
					data: response,
				});
			})
			.catch((err) => {
				throw new Error("seu erro ");
			});
	}
}

export { LoginController };
