import { DeleteMoneyUseCase } from "./DeleteMoneyUseCase";
import { Request, Response } from "express";

class DeleteMoneyController {
	constructor(private deleteMoneyUseCase: DeleteMoneyUseCase) {}

	public async handle(req: Request, res: Response) {
		const { id } = req.body;

		const aux = await this.deleteMoneyUseCase.execute(id);

		return res.status(201).send(aux);
	}
}

export { DeleteMoneyController };

