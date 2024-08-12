import { DeleteMoneyController } from "./DeleteMoneyController";
import { DeleteMoneyUseCase } from "./DeleteMoneyUseCase";
import { MoneyRepository } from "../../repositories/MoneyRepository";
import e from "express";

const moneyRepository = MoneyRepository.getInstance();
const deleteMoneyUseCase = new DeleteMoneyUseCase(moneyRepository);
const deleteMoneyController = new DeleteMoneyController(deleteMoneyUseCase);

export { deleteMoneyController };

