import { ImoneylenderDTO } from "../../repository/Imoneylender";
import { CreateMoneyUseCase } from "./createMoneyUseCase";
import { Request, Response } from "express";

class CreateMoneyController {
	constructor(private createMoneyUseCase: CreateMoneyUseCase) {}

	public async handle(req: Request, res: Response) {
		const data: ImoneylenderDTO = req.body;

		await this.createMoneyUseCase
			.execute(data)
			.then((response) => {
				return res.status(201).json({
					message: "Moneylender created successfully.",
					data: response,
					ok: true,
				});
			})
			.catch((error) => {
				return res.status(400).json({
					message: error.message || "Unexpected error.",
					ok: false,
				});
			});
	}
}

export { CreateMoneyController };
