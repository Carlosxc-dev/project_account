import { MoneyRepository } from "../../repositories/MoneyRepository";

class ListMoneyUseCase {
	constructor(private moneyRepository: MoneyRepository) {}

	public async execute(userid: number): Promise<any> {
		return await this.moneyRepository.listMoney(userid);
	}
}

export { ListMoneyUseCase };

