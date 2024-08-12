import { IRegisterDTO } from "../../interface/IRegister";
import { RegisterRepository } from "../../repository/RegisterRepository";
import { validationUpdateUserSchema } from "../../validation/validationUser";
import { z } from "zod";

class UpdateRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(data: z.infer<typeof validationUpdateUserSchema>): Promise<IRegisterDTO> {
		return await this.registerRepository.update(data);
	}
}

export { UpdateRegisterUseCase };

