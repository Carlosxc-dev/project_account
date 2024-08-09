import { CreateMoneyUseCase } from "./createMoneyUseCase";
import { CreateMoneyController } from "./createMoneyContoller";
import { MoneyRepository } from "../../repository/MoneyRepository";

const moneyRepository = MoneyRepository.getInstance();
const createMoneyUseCase = new CreateMoneyUseCase(moneyRepository);
const createMoneyController = new CreateMoneyController(createMoneyUseCase);

export { createMoneyController };
