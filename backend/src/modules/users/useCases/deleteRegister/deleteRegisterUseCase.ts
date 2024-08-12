import { IRegisterDTO } from "../../interface/IRegister";
import { RegisterRepository } from "../../repository/RegisterRepository";

class DeleteRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(id: number): Promise<IRegisterDTO> {
		return await this.registerRepository.delete(id);
	}
}

export { DeleteRegisterUseCase };
