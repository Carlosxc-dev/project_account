import { IRegister, IRegisterDTO } from "../interface/IRegister";
import prisma from "../../../utils/prisma";
import { validationLoginUserSchema, validationUpdateUserSchema } from "../validation/validationUser";
import { z } from "zod";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { CustomError } from "../../../utils/CustomError";
import { NotFoundError } from "../../../err/NotFoundError";
import { BadRequestError } from "../../../err/badRequestError";
import { error } from "console";

class RegisterRepository implements IRegister {
	private static INSTANCE: RegisterRepository;

	private constructor() {}

	public static getInstance() {
		if (!RegisterRepository.INSTANCE) {
			RegisterRepository.INSTANCE = new RegisterRepository();
		}

		return RegisterRepository.INSTANCE;
	}

	async findbyusername(emaill: string): Promise<IRegisterDTO | null> {
		try {
			return await prisma.account.findUnique({
				where: { email: emaill },
			});
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error");
			}
			throw new BadRequestError("Unknown database error");
		}
	}

	async createRegister(data: IRegisterDTO): Promise<IRegisterDTO> {
		try {
			return await prisma.account.create({
				data: {
					name: data.name,
					email: data.email,
					password: data.password,
				},
			});
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error");
			}
			throw new BadRequestError("Unknown database error");
		}
	}

	public async list(): Promise<IRegisterDTO[]> {
		try {
			const datauser = await prisma.account.findMany({
				select: {
					id: true,
					name: true,
					email: true,
					password: true,
				},
			});
			return datauser;
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error");
			}
			throw new BadRequestError("Unknown database error");
		}
	}

	async update(data: z.infer<typeof validationUpdateUserSchema>): Promise<any> {
		try {
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
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				throw new NotFoundError("Database query error / users not exist");
			}
			throw new BadRequestError("Unknown database error");
		}
	}

	public async delete(userid: number): Promise<any> {
		try {
			await prisma.moneylender.deleteMany({
				where: { id_account: userid },
			});

			await prisma.account.delete({
				where: {
					id: userid,
				},
			});

			return "User and your moneys deleted";
		} catch (err) {
			if (err instanceof PrismaClientKnownRequestError) {
				// Verificar o erro específico e lançar um erro customizado, se necessário
				console.log(err);

				throw new NotFoundError("Database query error ou chave extrangeira em outra tabela");
			}
			throw new BadRequestError("Unknown database error");
		}
	}
}

export { RegisterRepository };
