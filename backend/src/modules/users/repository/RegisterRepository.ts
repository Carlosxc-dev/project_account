import { log } from "console";
import { IRegister, IRegisterDTO } from "../interface/IRegister";
import prisma from "../../../utils/prisma";
import { validationLoginUserSchema, validationUpdateUserSchema } from "../validation/validationUser";
import { z } from "zod";

class RegisterRepository implements IRegister {
	private static INSTANCE: RegisterRepository;

	private constructor() {}

	public static getInstance() {
		if (!RegisterRepository.INSTANCE) {
			RegisterRepository.INSTANCE = new RegisterRepository();
		}

		return RegisterRepository.INSTANCE;
	}

	async findbyusername(data: z.infer<typeof validationLoginUserSchema>): Promise<IRegisterDTO> {
		return await prisma.account
			.findUnique({
				where: {
					email: data.email,
				},
			})
			.then((data) => {
				console.log(data);
				return data;
			})
			.catch((err) => {
				console.log(err);
				return err;
			});
	}

	async createRegister(data: IRegisterDTO): Promise<IRegisterDTO> {
		const dataUser = await prisma.account.create({
			data: {
				name: data.name,
				email: data.email,
				password: data.password,
			},
		});
		return dataUser;
	}

	public async list(): Promise<IRegisterDTO[]> {
		const datauser = await prisma.account.findMany({
			select: {
				name: true,
				email: true,
				password: true,
			},
		});
		return datauser;
	}

	async update(data: z.infer<typeof validationUpdateUserSchema>): Promise<any> {
		const user = await prisma.account.update({
			where: {
				id: data.id,
			},
			data: {
				name: data.name,
				password: data.password,
			},
		});

		return user;
	}

	public async delete(id: number): Promise<IRegisterDTO> {
		return await prisma.account
			.delete({
				where: {
					id: id,
				},
			})
			.then((data) => {
				console.log(data);
				return data;
			})
			.catch((err) => {
				console.log(err);
				return err;
			});
	}
}

export { RegisterRepository };

