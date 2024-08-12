import { Request, Response } from "express";
import { ImoneylenderDTO } from "../../interface/Imoneylender";
import { ListMoneyUseCase } from "./listMoneyUseCase";

class ListMoneyController {
	constructor(private listMoneyUseCase: ListMoneyUseCase) {}

	public async handle(req: Request, res: Response): Promise<any> {
		await this.listMoneyUseCase
			.execute()
			.then((response) => {
				return res.status(200).json({
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

export { ListMoneyController };

