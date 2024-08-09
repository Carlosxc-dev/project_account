import { ImoneylenderDTO } from "../../repository/Imoneylender";
import { MoneyRepository } from "../../repository/MoneyRepository";

class CreateMoneyUseCase {
	constructor(private moneyRepository: MoneyRepository) {}

	public async execute(data: ImoneylenderDTO): Promise<any> {
		const user = await this.moneyRepository.findUser(data.username);
		const userId = user.id;
		return await this.moneyRepository.createMoney(data, userId);
	}
}

export { CreateMoneyUseCase };
