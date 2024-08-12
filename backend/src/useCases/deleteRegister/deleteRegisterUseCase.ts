import { IRegisterDTO } from "../../interface/IRegister";
import { RegisterRepository } from "../../repository/RegisterRepository";

class DeleteRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(userName: string): Promise<IRegisterDTO> {
		return await this.registerRepository.delete(userName);
	}
}

export { DeleteRegisterUseCase };

