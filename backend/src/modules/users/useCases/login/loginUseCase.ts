import { IRegisterDTO } from "../../interface/IRegister";
import { RegisterRepository } from "../../repository/RegisterRepository";
import { validationLoginUserSchema } from "../../validation/validationUser";
import { z } from "zod";

class LoginUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(data: z.infer<typeof validationLoginUserSchema>) {
		return await this.registerRepository.findbyusername(data);
	}
}

export { LoginUseCase };

