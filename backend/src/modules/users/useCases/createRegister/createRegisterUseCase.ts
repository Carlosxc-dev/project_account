import { RegisterRepository } from "../../repository/RegisterRepository";
import { IRegisterDTO } from "../../interface/IRegister";
import { NotFoundError } from "../../../../err/NotFoundError";

class CreateRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(data: IRegisterDTO) {
		const response = await this.registerRepository.findbyusername(data.email);

		if (response) {
			throw new NotFoundError("User already exists");
		}

		const dataUser = await this.registerRepository.createRegister(data);

		return dataUser;
	}
}

export { CreateRegisterUseCase };

