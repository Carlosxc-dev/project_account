import { RegisterRepository } from "../../repository/RegisterRepository";
import { IRegisterDTO } from "../../interface/IRegister";
import { BadRequestError } from "../../../../err/badRequestError";
import { NotFoundError } from "../../../../err/Error";

class CreateRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(param: IRegisterDTO) {
		const data = await this.registerRepository.findbyusername(param);

		if (data) {
			throw new NotFoundError("User already exists");
		}

		const dataUser = await this.registerRepository.createRegister(param);

		return dataUser;
	}
}

export { CreateRegisterUseCase };

