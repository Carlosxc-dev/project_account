import { LoginController } from "./loginController";
import { LoginUseCase } from "./loginUseCase";
import { RegisterRepository } from "../../repository/RegisterRepository";

const loginRepository = RegisterRepository.getInstance();
const loginUseCase = new LoginUseCase(loginRepository);
const loginController = new LoginController(loginUseCase);

export { loginController };

