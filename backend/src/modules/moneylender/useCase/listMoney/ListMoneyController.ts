import { ListMoneyUseCase } from "./listMoneyUseCase";
import { Request, Response } from "express";

class ListMoneyController {
	constructor(private listMoneyUseCase: ListMoneyUseCase) {}

	public async handle(req: Request, res: Response) {
		const { userId } = req.body;

		const aux = await this.listMoneyUseCase.execute(userId);

		return res.status(200).send(aux);
	}
}

export { ListMoneyController };

