import { ImoneylenderDTO } from "./Imoneylender";
import prisma from "../utils/prisma";

class MoneyLender {
	private static INSTANCE: MoneyLender;

	constructor() {}

	public static getInstance() {
		if (!MoneyLender.INSTANCE) {
			MoneyLender.INSTANCE = new MoneyLender();
		}

		return MoneyLender.INSTANCE;
	}

	async findbyusername(data: ImoneylenderDTO): Promise<any> {
		const user = await prisma.account.findUnique({
			where: {
				id: data.userId,
			},
		});

		return user;
	}

	async createRegister(data: ImoneylenderDTO): Promise<ImoneylenderDTO> {
		const dataUser = await prisma.moneylender.create({
			data: {
				userId: data.userId,
				valor: data.valor,
				option: data.option,
				pago: data.pago,
			},
		});

		return dataUser;
	}

	public async list(): Promise<ImoneylenderDTO[]> {
		const datauser = await prisma.moneylender.findMany({
			select: {
				userId: true,
				valor: true,
				option: true,
				pago: true,
			},
		});
		return datauser;
	}

	async update(data: ImoneylenderDTO): Promise<any> {
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

	async delete(userName: string): Promise<ImoneylenderDTO> {
		const user = await prisma.account.delete({
			where: {
				userName: userName,
			},
		});

		return user;
	}

	async findbyId(id: number): Promise<any> {
		const user = await prisma.account.findUnique({
			where: {
				id: id,
			},
		});

		return user;
	}
}

