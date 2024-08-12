import { ListRegisterUseCase } from "./ListRegisterUseCase";
import { Request, Response } from "express";

class ListRegisterController {
	constructor(private listRegisterUseCase: ListRegisterUseCase) {}

	public async handle(req: Request, res: Response) {
		const aux = await this.listRegisterUseCase.execute();

		return res.status(201).send(aux);
	}
}

export { ListRegisterController };

