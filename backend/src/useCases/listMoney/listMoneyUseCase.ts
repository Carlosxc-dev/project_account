import { MoneyRepository } from "../../repository/MoneyRepository";

class ListMoneyUseCase {
	constructor(private moneyRepository: MoneyRepository) {}

	public async execute(): Promise<any> {
		return await this.moneyRepository.listMoney();
	}
}

export { ListMoneyUseCase };
