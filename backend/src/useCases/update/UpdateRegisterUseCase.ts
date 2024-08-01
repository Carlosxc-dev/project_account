import { IRegisterDTO } from "../../repository/IRegister";
import { RegisterRepository } from "../../repository/RegisterRepository";

class UpdateRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(data: IRegisterDTO): Promise<IRegisterDTO> {
		const exist = await this.registerRepository.findbyusername(data);

		if (!exist) {
			throw new Error("user not exist");
		}

		return await this.registerRepository.update(data);
	}
}

export { UpdateRegisterUseCase };

