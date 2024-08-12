import { ptBR } from "date-fns/locale";
import { ImoneylenderDTO } from "../../interface/Imoneylender";
import { MoneyRepository } from "../../repositories/MoneyRepository";
import { format } from "date-fns";

class CreateMoneyUseCase {
	constructor(private moneyRepository: MoneyRepository) {}

	public async execute(data: ImoneylenderDTO): Promise<ImoneylenderDTO> {
		try {
			const result = await this.moneyRepository.createMoney(data);

			const res_data: ImoneylenderDTO = {
				id_account: result.userId,
				name: result.name,
				value: result.valor,
				option: result.option,
				pago: result.pago,
				createdAt: new Date(format(result.createdAt, "dd MMMM yyyy", { locale: ptBR })),
			};

			console.log(res_data);
			return res_data;
		} catch (error) {
			// Lida com o erro, e você pode propagar o erro para cima, se necessário
			console.error("Erro ao criar moneylender:", error);
			throw error; // Repropaga o erro para que o controller possa lidar com ele
		}
	}
}

export { CreateMoneyUseCase };

