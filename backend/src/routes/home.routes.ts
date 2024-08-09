import { Router } from "express";
import { createMoneyController } from "../useCases/createMoney/index";
import { listMoneyController } from "../useCases/listMoney/index";

const home = Router();

home.get("/", (req, res) => {
	return listMoneyController.handle(req, res);
});

home.post("/", (req, res) => {
	return createMoneyController.handle(req, res);
});

export { home };
