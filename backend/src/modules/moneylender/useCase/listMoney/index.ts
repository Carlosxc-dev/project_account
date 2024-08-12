import { ListMoneyController } from "./ListMoneyController";
import { ListMoneyUseCase } from "./listMoneyUseCase";
import { MoneyRepository } from "../../repositories/MoneyRepository";
import e from "express";

const moneyRepository = MoneyRepository.getInstance();
const listMoneyUseCase = new ListMoneyUseCase(moneyRepository);
const listMoneyController = new ListMoneyController(listMoneyUseCase);

export { listMoneyController };

