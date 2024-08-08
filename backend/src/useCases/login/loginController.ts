import { LoginUseCase } from "./loginUseCase";
import { Request, Response } from "express";
import { Auth } from "../../routes/auth.routes";

class LoginController {
	private auth: Auth;
	constructor(private loginUseCase: LoginUseCase) {
		this.auth = new Auth();
	}

	public async handle(req: Request, res: Response) {
		const data = req.body;

		await this.loginUseCase
			.execute(data)
			.then((response) => {
				if (!response) {
					return res.status(400).send({
						message: "user nao encontrado",
					});
				}

				const token = this.auth.generateToken(response.userName);

				res.cookie("token", token, {
					httpOnly: true, // somente http
					secure: false, // Use apenas em HTTPS
					sameSite: "strict", // Protege contra CSRF
					maxAge: 1000 * 60, // 1 minuto
				});

				return res.status(200).send({ message: "login completo -- cookie com jwt", ok: true, data: response });
			})
			.catch((err) => {
				throw new Error("erro de autenticacao no server", err);
			});
	}
}

export { LoginController };

