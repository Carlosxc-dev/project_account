import { ReadCountMoneyController } from "./ReadCountMoneyController";
import { ReadCountMoneyUseCase } from "./ReadCountMoneyUseCase";
import { MoneyRepository } from "../../repositories/MoneyRepository";

const moneyRepository = MoneyRepository.getInstance();
const readCountMoneyUseCase = new ReadCountMoneyUseCase(moneyRepository);
const readCountMoneyController = new ReadCountMoneyController(readCountMoneyUseCase);

export { readCountMoneyController };

