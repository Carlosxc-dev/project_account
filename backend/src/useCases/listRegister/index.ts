import { ListRegisterController } from "./ListRegisterController";
import { ListRegisterUseCase } from "./ListRegisterUseCase";
import { RegisterRepository } from "../../repository/RegisterRepository";

const registerRepository = RegisterRepository.getInstance();
const listRegisterUseCase = new ListRegisterUseCase(registerRepository);
const listRegisterController = new ListRegisterController(listRegisterUseCase);

export { listRegisterController };

