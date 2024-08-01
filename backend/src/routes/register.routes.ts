import { Router } from "express";
import { createRegisterController } from "../useCases/createRegister/index";
import { listRegisterController } from "../useCases/listRegister";
import { deleteRegisterController } from "../useCases/deleteRegister";
import { updateRegisterController } from "../useCases/update";

const register = Router();

register.post("/", (req, res) => {
	return createRegisterController.handle(req, res);
});

register.get("/", (req, res) => {
	return listRegisterController.handle(req, res);
});

register.delete("/", (req, res) => {
	return deleteRegisterController.handle(req, res);
});

register.put("/", (req, res) => {
	return updateRegisterController.handle(req, res);
});

export { register };

