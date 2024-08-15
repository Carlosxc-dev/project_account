import { IRegisterDTO } from "../../interface/IRegister";
import { RegisterRepository } from "../../repository/RegisterRepository";

class DeleteRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(id: number): Promise<IRegisterDTO> {
		const response = await this.registerRepository.delete(id);
		return response;
	}
}

export { DeleteRegisterUseCase };

