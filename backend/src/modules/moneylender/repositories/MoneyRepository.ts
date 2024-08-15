import { ptBR } from "date-fns/locale";
import { Imoneylender, ImoneylenderDTO } from "../interface/Imoneylender";
import prisma from "../../../utils/prisma";
import { format } from "date-fns";

class MoneyRepository implements Imoneylender {
	private static INSTANCE: MoneyRepository;

	private constructor() {}

	public static getInstance() {
		if (!MoneyRepository.INSTANCE) {
			MoneyRepository.INSTANCE = new MoneyRepository();
		}

		return MoneyRepository.INSTANCE;
	}

	public async findUser(email: string): Promise<any> {
		const user = await prisma.account.findFirst({
			where: {
				email: email,
			},
		});

		if (!user) {
			throw new Error(`User not found ${email}`);
		}

		return user;
	}

	public async createMoney(data: ImoneylenderDTO): Promise<any> {
		return await prisma.moneylender
			.create({
				data: {
					id_account: data.id_account,
					name: data.name,
					value: data.value,
					option: data.option,
					pago: data.pago,
				},
			})
			.then((result) => {
				console.log(result);

				return result;
			})
			.catch((error) => {
				return error;
			});
	}

	public async listMoney(userid: number): Promise<any> {
		return await prisma.moneylender.findMany({
			where: {
				id_account: userid,
			},
		});
	}

	public async deleteMoney(id: number): Promise<any> {
		return await prisma.moneylender
			.delete({
				where: {
					id: id,
				},
			})
			.then((result) => {
				return result;
			})
			.catch((error) => {
				return error;
			});
	}

	public async updateMoney(data: ImoneylenderDTO): Promise<any> {
		return await prisma.moneylender
			.update({
				where: {
					id: data.id_account,
				},
				data: {
					name: data.name,
					value: data.value,
					option: data.option,
					pago: data.pago,
				},
			})
			.then((result) => {
				return result;
			})
			.catch((error) => {
				return error;
			});
	}
}

export { MoneyRepository };

