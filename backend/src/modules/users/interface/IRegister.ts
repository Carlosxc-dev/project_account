import { validationUpdateUserSchema } from "../validation/validationUser";
import { z } from "zod";

interface IRegisterDTO {
	id?: number;
	name: string;
	email: string;
	password: string;
}

interface IRegister {
	createRegister(data: IRegisterDTO): Promise<any>;
	list(data: IRegisterDTO): Promise<any>;
	update(data: z.infer<typeof validationUpdateUserSchema>): Promise<any>;
	delete(id: number): Promise<IRegisterDTO>;
	findbyusername(data: IRegisterDTO): Promise<any>;
}

export { IRegisterDTO, IRegister };

