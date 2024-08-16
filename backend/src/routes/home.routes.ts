import { Router } from "express";
import { listMoneyController } from "../modules/moneylender/useCase/listMoney/index";
import { createMoneyController } from "../modules/moneylender/useCase/createMoney/index";
import { updateMoneyController } from "../modules/moneylender/useCase/UpdateMoney/index";
import { deleteMoneyController } from "../modules/moneylender/useCase/DeleteMoney/index";

const home = Router();

home.post("/create", (req, res, next) => {
	return createMoneyController.handle(req, res, next);
});
home.post("/list", (req, res, next) => {
	return listMoneyController.handle(req, res, next);
});
home.put("/update", (req, res, next) => {
	return updateMoneyController.handle(req, res, next);
});

home.delete("/delete", (req, res, next) => {
	return deleteMoneyController.handle(req, res, next);
});

export { home };

