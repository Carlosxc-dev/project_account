import { MoneyRepository } from "./MoneyRepository";

interface ImoneylenderDTO {
	username: string;
	valor: string;
	option: string;
	pago: string;
}

interface Imoneylender {
	findUser(username: string): Promise<any>;
	createMoney(data: ImoneylenderDTO, userId: number): Promise<any>;
	listMoney(): Promise<any>;
}

export { ImoneylenderDTO, Imoneylender };
