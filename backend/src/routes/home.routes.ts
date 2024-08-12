import { Router } from "express";
import { listMoneyController } from "../modules/moneylender/useCase/listMoney/index";
import { createMoneyController } from "../modules/moneylender/useCase/createMoney/index";
import { updateMoneyController } from "../modules/moneylender/useCase/UpdateMoney/index";
import { deleteMoneyController } from "../modules/moneylender/useCase/DeleteMoney/index";

const home = Router();

home.post("/create", (req, res) => {
	return createMoneyController.handle(req, res);
});
home.get("/list", (req, res) => {
	return listMoneyController.handle(req, res);
});
home.put("/update", (req, res) => {
	return updateMoneyController.handle(req, res);
});

home.delete("/delete", (req, res) => {
	return deleteMoneyController.handle(req, res);
});

export { home };

