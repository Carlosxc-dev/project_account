interface IRegisterDTO {
	id?: number;
	name: string;
	userName: string;
	password: number;
}

interface IRegister {
	createRegister(data: IRegisterDTO): Promise<any>;
	list(data: IRegisterDTO): Promise<any>;
	update(data: IRegisterDTO): Promise<any>;
	delete(userName: string): Promise<IRegisterDTO>;
	findbyusername(data: IRegisterDTO): Promise<any>;
}

export { IRegisterDTO, IRegister };

