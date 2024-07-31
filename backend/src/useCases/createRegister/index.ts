import { CreateRegisterController } from "./createRegisterCotroller";
import { CreateRegisterUseCase } from "./createRegisterUseCase";

const createRegisterUseCase = new CreateRegisterUseCase();
const createRegisterController = new CreateRegisterController(
	createRegisterUseCase
);

export { createRegisterController };
