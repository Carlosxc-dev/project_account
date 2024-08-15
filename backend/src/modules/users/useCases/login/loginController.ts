import { LoginUseCase } from "./loginUseCase";
import { Request, Response } from "express";
import { Auth } from "../../../../routes/auth.routes";
import { validationLoginUserSchema } from "../../validation/validationUser";
import { IRegisterDTO } from "../../interface/IRegister";

class LoginController {
	private auth: Auth;
	constructor(private loginUseCase: LoginUseCase) {
		this.auth = new Auth();
	}

	public async handle(req: Request, res: Response) {
		const data = req.body;

		const parseData = validationLoginUserSchema.parse(data);

		await this.loginUseCase
			.execute(parseData)
			.then((response) => {
				if (!response) {
					return res.status(404).send({
						message: "user nao encontrado",
					});
				}

				const token = this.auth.generateToken(response.email);

				res.cookie("token", token, {
					httpOnly: true, // somente http
					secure: false, // Use apenas em HTTPS
					sameSite: "strict", // Protege contra CSRF
					maxAge: 1000 * 60 * 60, // 1 hora
				});

				return res.status(200).send({ message: "login completo -- cookie com jwt", ok: true, data: response });
			})
			.catch((err) => {
				throw new Error("erro de autenticacao no server", err);
			});
	}
}

export { LoginController };

