import { ImoneylenderDTO } from "../../../../interface/Imoneylender";
import { MoneyRepository } from "../../repositories/MoneyRepository";

class UpdateMoneyUseCase {
	constructor(private moneyRepository: MoneyRepository) {}

	public async execute(data: ImoneylenderDTO): Promise<any> {
		return await this.moneyRepository.updateMoney(data);
	}
}

export { UpdateMoneyUseCase };

