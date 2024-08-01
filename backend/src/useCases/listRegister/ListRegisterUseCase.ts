import { RegisterRepository } from "../../repository/RegisterRepository";

interface IcreateRegister {
	id?: number;
	name: string;
	userName: string;
	password: number;
}

class ListRegisterUseCase {
	constructor(private registerRepository: RegisterRepository) {}

	public async execute(): Promise<IcreateRegister[]> {
		return await this.registerRepository.list();
	}
}

export { ListRegisterUseCase };

