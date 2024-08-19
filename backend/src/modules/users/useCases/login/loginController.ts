import { LoginUseCase } from "./loginUseCase";
import { NextFunction, Request, Response } from "express";
import { Auth } from "../../../../routes/auth.routes";
import { validationLoginUserSchema } from "../../validation/validationUser";
import { IRegisterDTO } from "../../interface/IRegister";
import { ResponseSuccess } from "../../../../utils/ResponseSuccess";
import { AuthenticationError } from "../../../../err/authenticateError";

class LoginController {
	private auth: Auth;
	constructor(private loginUseCase: LoginUseCase) {
		this.auth = new Auth();
	}

	public async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const data = req.body;

			const parseData = validationLoginUserSchema.parse(data);
			let mytoken = "";

			const hashedPassword = await this.loginUseCase.findHash(parseData.email);
			const is_password = await this.auth.comparePassword(parseData.password, hashedPassword);

			if (!is_password) {
				throw new AuthenticationError("Password is incorrect");
			}

			const result = await this.loginUseCase.execute(parseData);

			if (result) {
				mytoken = this.auth.generateToken(result.email);
			}
			return res
				.status(ResponseSuccess.loginSuccess.statusCode)
				.send({ message: ResponseSuccess.loginSuccess.message, data: result, token: mytoken });
		} catch (error) {
			next(error);
		}
	}
}

export { LoginController };
