import { UpdateMoneyController } from "./UpdateMoneyController";
import { UpdateMoneyUseCase } from "./UpdateMoneyUseCase";
import { MoneyRepository } from "../../repositories/MoneyRepository";

const moneyRepository = MoneyRepository.getInstance();
const updateMoneyUseCase = new UpdateMoneyUseCase(moneyRepository);
const updateMoneyController = new UpdateMoneyController(updateMoneyUseCase);

export { updateMoneyController };

