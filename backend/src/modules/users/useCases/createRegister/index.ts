import { CreateRegisterController } from "./createRegisterCotroller";
import { CreateRegisterUseCase } from "./createRegisterUseCase";
import { RegisterRepository } from "../../repository/RegisterRepository";

const registerRepository = RegisterRepository.getInstance(); // Singleton pattern to avoid multiple instances of the same class

const createRegisterUseCase = new CreateRegisterUseCase(registerRepository);

const createRegisterController = new CreateRegisterController(createRegisterUseCase);

export { createRegisterController };

