import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { RegisterRepository } from "../../repository/RegisterRepository";
import { IRegisterDTO } from "../../interface/IRegister";

class CreateRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(param: IRegisterDTO) {
		const data = await this.registerRepository.findbyusername(param);

		if (data) {
			throw new Error("User already exists");
		}

		const dataUser = await this.registerRepository.createRegister(param);

		return dataUser;
	}
}

export { CreateRegisterUseCase };

