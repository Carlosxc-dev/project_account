import { MoneyRepository } from "../../repositories/MoneyRepository";

class DeleteMoneyUseCase {
	constructor(private moneyRepository: MoneyRepository) {}

	public async execute(id: number): Promise<any> {
		return await this.moneyRepository.deleteMoney(id);
	}
}

export { DeleteMoneyUseCase };

