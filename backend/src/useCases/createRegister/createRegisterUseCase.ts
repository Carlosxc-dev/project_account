import { Request, Response } from "express";
import prisma from "../../utils/prisma";

interface IcreateRegister {
	name: string;
	userName: string;
	password: number;
}

class CreateRegisterUseCase {
	public async execute({ name, userName, password }: IcreateRegister): Promise<any> {
		const alreadyExists = await prisma.account.findUnique({
			where: {
				userName: userName,
			},
		});

		if (alreadyExists) {
			throw new Error("User already exists");
		}

		const dataUser = await prisma.account.create({
			data: {
				name: name,
				userName: userName,
				password: password,
			},
		});

		return dataUser;
	}
}

export { CreateRegisterUseCase };

