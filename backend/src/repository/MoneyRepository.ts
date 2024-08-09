import { Imoneylender, ImoneylenderDTO } from "./Imoneylender";
import prisma from "../utils/prisma";

class MoneyRepository implements Imoneylender {
	private static INSTANCE: MoneyRepository;

	private constructor() {}

	public static getInstance() {
		if (!MoneyRepository.INSTANCE) {
			MoneyRepository.INSTANCE = new MoneyRepository();
		}

		return MoneyRepository.INSTANCE;
	}

	public async findUser(username: string): Promise<any> {
		const user = await prisma.account.findFirst({
			where: {
				userName: username,
			},
		});

		if (!user) {
			throw new Error("User not found");
		}

		return user;
	}

	public async createMoney(data: ImoneylenderDTO, userId: number): Promise<any> {
		return await prisma.moneylender.create({
			data: {
				userId: userId,
				valor: data.valor,
				option: data.option,
				pago: data.pago,
			},
		});
	}

	public async listMoney(): Promise<any> {
		return await prisma.moneylender.findMany({
			where: {
				userId: 1,
			},
		});
	}
}

export { MoneyRepository };
