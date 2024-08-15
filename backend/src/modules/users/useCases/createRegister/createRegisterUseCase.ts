import { RegisterRepository } from "../../repository/RegisterRepository";
import { IRegisterDTO } from "../../interface/IRegister";
import { NotFoundError } from "../../../../err/NotFoundError";

class CreateRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(param: IRegisterDTO) {
		const response = await this.registerRepository.findbyusername(param);

		if (response) {
			throw new NotFoundError("User already exists");
		}

		const dataUser = await this.registerRepository.createRegister(param);

		return dataUser;
	}
}

export { CreateRegisterUseCase };

