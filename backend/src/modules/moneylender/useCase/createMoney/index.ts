import { CreateMoneyUseCase } from "./createMoneyUseCase";
import { CreateMoneyController } from "./createMoneyController";
import { MoneyRepository } from "../../repositories/MoneyRepository";

const moneyRepository = MoneyRepository.getInstance();
const createMoneyUseCase = new CreateMoneyUseCase(moneyRepository);
const createMoneyController = new CreateMoneyController(createMoneyUseCase);

export { createMoneyController };

