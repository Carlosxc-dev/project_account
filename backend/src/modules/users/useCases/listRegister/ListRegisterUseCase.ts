import { IRegisterDTO } from "../../interface/IRegister";
import { RegisterRepository } from "../../repository/RegisterRepository";

class ListRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(): Promise<IRegisterDTO[]> {
		return await this.registerRepository.list();
	}
}

export { ListRegisterUseCase };

