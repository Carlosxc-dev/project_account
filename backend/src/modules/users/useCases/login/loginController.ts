import { LoginUseCase } from "./loginUseCase";
import { NextFunction, Request, Response } from "express";
import { Auth } from "../../../../routes/auth.routes";
import { validationLoginUserSchema } from "../../validation/validationUser";
import { IRegisterDTO } from "../../interface/IRegister";
import { ResponseSuccess } from "../../../../utils/ResponseSuccess";

class LoginController {
	private auth: Auth;
	constructor(private loginUseCase: LoginUseCase) {
		this.auth = new Auth();
	}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const data = req.body;
			const parseData = validationLoginUserSchema.parse(data);
			const result = await this.loginUseCase.execute(parseData);

			if (result) {
				const token = this.auth.generateToken(result.email);
				res.cookie("token", token, {
					httpOnly: true, // somente http
					secure: false, // Use apenas em HTTPS
					sameSite: "strict", // Protege contra CSRF
					maxAge: 1000 * 60 * 60, // 1 hora
				});
			}
			return res
				.status(ResponseSuccess.loginSuccess.statusCode)
				.send({ message: ResponseSuccess.loginSuccess.message, data: result });
		} catch (error) {
			next(error);
		}
	}
}

export { LoginController };

