import { IRegisterDTO } from "../../repository/IRegister";
import { DeleteRegisterUseCase } from "./deleteRegisterUseCase";
import { Request, Response } from "express";

class DeleteRegisterController {
	constructor(private listRegisterUseCase: DeleteRegisterUseCase) {}

	public async handle(req: Request, res: Response) {
		const { userName } = req.body;

		await this.listRegisterUseCase
			.execute(userName)
			.then((data) => {
				return res.status(201).json({
					message: "user delete sucess!!",
					user: data,
				});
			})
			.catch((err) => {
				return res.status(400).json({
					message: "erro deletar user not exist",
					err: err,
				});
			});
	}
}

export { DeleteRegisterController };

