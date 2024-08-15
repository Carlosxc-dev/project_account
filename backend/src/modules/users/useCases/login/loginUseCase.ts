import { BadRequestError } from "../../../../err/badRequestError";
import { IRegisterDTO } from "../../interface/IRegister";
import { RegisterRepository } from "../../repository/RegisterRepository";
import { validationLoginUserSchema } from "../../validation/validationUser";
import { z } from "zod";

class LoginUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(data: z.infer<typeof validationLoginUserSchema>) {
		const result = await this.registerRepository.findbyusername(data);

		if (!result) {
			throw new BadRequestError("users doesn't exist !!");
		}

		return result;
	}
}

export { LoginUseCase };

