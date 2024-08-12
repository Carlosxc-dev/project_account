import { ImoneylenderDTO } from "../../interface/Imoneylender";
import { CreateMoneyUseCase } from "./createMoneyUseCase";
import { Request, Response } from "express";
import { validationCreateMoneySchema } from "../../validation/validationMoney";
import { z } from "zod";

class CreateMoneyController {
	constructor(private createMoneyUseCase: CreateMoneyUseCase) {}

	public async handle(req: Request, res: Response) {
		try {
			const data: ImoneylenderDTO = req.body;

			const parseData = validationCreateMoneySchema.parse(data);

			await this.createMoneyUseCase
				.execute(parseData)
				.then((data: ImoneylenderDTO) => {
					console.log(data);

					return res.status(201).send(data);
				})
				.catch((err) => {
					return err;
				});
		} catch (error) {
			if (error instanceof z.ZodError) {
				return res.status(400).json({ errors: error.errors[0].message });
			}
			return res.status(500).json({ message: "Internal server error" });
		}
	}
}

export { CreateMoneyController };

