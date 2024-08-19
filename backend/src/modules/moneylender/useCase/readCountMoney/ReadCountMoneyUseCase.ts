import { MoneyRepository } from "../../repositories/MoneyRepository";

class ReadCountMoneyUseCase {
	constructor(private moneyRepository: MoneyRepository) {}

	public async execute(userid: number): Promise<any> {
		return await this.moneyRepository.countMoney(userid);
	}
}

export { ReadCountMoneyUseCase };

