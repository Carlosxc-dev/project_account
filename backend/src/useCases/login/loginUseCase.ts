import { IRegisterDTO } from "../../repository/IRegister";
import { RegisterRepository } from "../../repository/RegisterRepository";

class LoginUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(data: IRegisterDTO) {
		return await this.registerRepository.findbyusername(data);
	}
}

export { LoginUseCase };

