import { UpdateRegisterController } from "./updateRegisterController";
import { UpdateRegisterUseCase } from "./UpdateRegisterUseCase";
import { RegisterRepository } from "../../repository/RegisterRepository";

const registerRepository = RegisterRepository.getInstance();
const updateRegisterUseCase = new UpdateRegisterUseCase(registerRepository);
const updateRegisterController = new UpdateRegisterController(updateRegisterUseCase);

export { updateRegisterController };

