import { ImoneylenderDTO } from "../../interface/Imoneylender";
import { UpdateMoneyUseCase } from "./UpdateMoneyUseCase";
import { Request, Response } from "express";

class UpdateMoneyController {
	constructor(private updateMoneyUseCase: UpdateMoneyUseCase) {}

	public async handle(req: Request, res: Response) {
		const data: ImoneylenderDTO = req.body;

		const aux = await this.updateMoneyUseCase.execute(data);

		return res.status(200).send(aux);
	}
}

export { UpdateMoneyController };

