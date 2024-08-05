import { Request, Response } from "express";
import { CreateRegisterUseCase } from "./createRegisterUseCase";
import { createRegisterSchema } from "./createRegisterSchema";
import { z } from "zod";

class CreateRegisterController {
	private createRegisterUseCase: CreateRegisterUseCase;

	//constructor(private createRegisterUseCase: CreateRegisterUseCase){}		outro modo de fazer
	constructor(createRegisterUseCase: CreateRegisterUseCase) {
		this.createRegisterUseCase = createRegisterUseCase;
	}

	public handle(req: Request, res: Response) {
		try {
			const data = req.body;
			data.password = parseInt(data.password);
			const parseData = createRegisterSchema.parse(data);

			this.createRegisterUseCase
				.execute(parseData)
				.then((data) => {
					return res.status(201).json({ message: "user made sucess !!", data: data });
				})
				.catch((err) => {
					return res.status(400).json({ message: err.message });
				});
		} catch (err) {
			// Se a validação falhar, retorna o erro de validação
			if (err instanceof z.ZodError) {
				return res.status(400).json({ errors: err.errors[0].message });
			}
			// Tratamento de outros erros que não são de validação
			return res.status(500).json({ message: "Erro interno do servidor" });
		}
	}
}

export { CreateRegisterController };
