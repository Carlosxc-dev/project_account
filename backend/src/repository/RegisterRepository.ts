import { IRegister, IRegisterDTO } from "./IRegister";
import prisma from "../utils/prisma";

class RegisterRepository implements IRegister {
	private static INSTANCE: RegisterRepository;

	private constructor() {}

	public static getInstance() {
		if (!RegisterRepository.INSTANCE) {
			RegisterRepository.INSTANCE = new RegisterRepository();
		}

		return RegisterRepository.INSTANCE;
	}

	async findbyusername(data: IRegisterDTO): Promise<any> {
		const user = await prisma.account.findUnique({
			where: {
				userName: data.userName,
			},
		});

		return user;
	}

	async createRegister(data: IRegisterDTO): Promise<IRegisterDTO> {
		const dataUser = await prisma.account.create({
			data: {
				name: data.name,
				userName: data.userName,
				password: data.password,
			},
		});
		return dataUser;
	}

	public async list(): Promise<IRegisterDTO[]> {
		const datauser = await prisma.account.findMany({
			select: {
				name: true,
				userName: true,
				password: true,
			},
		});
		return datauser;
	}

	async update(data: IRegisterDTO): Promise<any> {
		const user = await prisma.account.update({
			where: {
				userName: data.userName,
			},
			data: {
				name: data.name,
				password: data.password,
			},
		});

		return user;
	}

	public async delete(data: string): Promise<IRegisterDTO> {
		const user = await prisma.account.delete({
			where: {
				userName: data,
			},
		});
		return user;
	}
}

export { RegisterRepository };

