import { ptBR } from "date-fns/locale";
import { Imoneylender, ImoneylenderDTO } from "../interface/Imoneylender";
import prisma from "../../../utils/prisma";
import { format } from "date-fns";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NotFoundError } from "../../../err/NotFoundError";
import { BadRequestError } from "../../../err/badRequestError";

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
		try {
			const user = await prisma.account.findFirst({
				where: {
					email: email,
				},
			});

			return user;
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error / users not exist");
			}
			throw new BadRequestError("Unknown database error");
		}
	}

	public async createMoney(data: ImoneylenderDTO): Promise<any> {
		try {
			return await prisma.moneylender.create({
				data: {
					id_account: data.id_account,
					name: data.name,
					value: data.value,
					option: data.option,
					pago: data.pago,
				},
			});
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error / users not exist");
			}
			throw new BadRequestError("Unknown database error");
		}
	}

	public async listMoney(userid: number): Promise<any> {
		try {
			return await prisma.moneylender.findMany({
				where: {
					id_account: userid,
				},
			});
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error / users not exist");
			}
			throw new BadRequestError("Unknown database error");
		}
	}

	public async deleteMoney(id: number): Promise<any> {
		try {
			return await prisma.moneylender.delete({
				where: {
					id: id,
				},
			});
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error / users not exist");
			}
			throw new BadRequestError("Unknown database error");
		}
	}

	public async updateMoney(data: ImoneylenderDTO): Promise<any> {
		try {
			return await prisma.moneylender.update({
				where: {
					id: data.id_account,
				},
				data: {
					name: data.name,
					value: data.value,
					option: data.option,
					pago: data.pago,
				},
			});
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error / users not exist");
			}
			throw new BadRequestError("Unknown database error");
		}
	}

	public async countMoney(userid: number): Promise<any> {
		try {
			const credito = await prisma.moneylender.aggregate({
				where: {
					id_account: userid,
					option: true,
				},
				_sum: {
					value: true,
				},
			});

			const debito = await prisma.moneylender.aggregate({
				where: {
					id_account: userid,
					option: false,
				},
				_sum: {
					value: true,
				},
			});

			return { credito, debito };
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error / users not exist");
			}
			throw new BadRequestError("Unknown database error");
		}
	}
}

export { MoneyRepository };

