import { ptBR } from "date-fns/locale";
import { ImoneylenderDTO } from "../../interface/Imoneylender";
import { MoneyRepository } from "../../repositories/MoneyRepository";
import { format } from "date-fns";

class CreateMoneyUseCase {
	constructor(private moneyRepository: MoneyRepository) {}

	public async execute(data: ImoneylenderDTO): Promise<ImoneylenderDTO> {
		const result = await this.moneyRepository.createMoney(data);
		return result;
	}
}

export { CreateMoneyUseCase };

