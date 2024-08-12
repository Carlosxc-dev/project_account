import { MoneyRepository } from "../repositories/MoneyRepository";

interface ImoneylenderDTO {
	id_account: number;
	name: string;
	value: number;
	option: boolean;
	pago: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

interface Imoneylender {
	findUser(username: string): Promise<any>;
	createMoney(data: ImoneylenderDTO, userId: number): Promise<any>;
	listMoney(userid: number): Promise<any>;
	deleteMoney(data: number): Promise<any>;
	updateMoney(data: ImoneylenderDTO): Promise<any>;
}

export { ImoneylenderDTO, Imoneylender };

