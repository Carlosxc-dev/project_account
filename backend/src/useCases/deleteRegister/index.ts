import { DeleteRegisterController } from "./deleteRegisterController";
import { DeleteRegisterUseCase } from "./deleteRegisterUseCase";
import { RegisterRepository } from "../../repository/RegisterRepository";

const registerRepository = RegisterRepository.getInstance();
const deleteRegisterUseCase = new DeleteRegisterUseCase(registerRepository);
const deleteRegisterController = new DeleteRegisterController(deleteRegisterUseCase);

export { deleteRegisterController };

