import { Router } from "express";
import { createRegisterController } from "../modules/users/useCases/createRegister/index";
import { listRegisterController } from "../modules/users/useCases/listRegister";
import { deleteRegisterController } from "../modules/users/useCases/deleteRegister";
import { updateRegisterController } from "../modules/users/useCases/update";

const register = Router();

register.post("/", (req, res, next) => {
	return createRegisterController.handle(req, res, next);
});

register.get("/", (req, res, next) => {
	return listRegisterController.handle(req, res, next);
});

register.delete("/", (req, res, next) => {
	return deleteRegisterController.handle(req, res, next);
});

register.put("/", (req, res, next) => {
	return updateRegisterController.handle(req, res, next);
});

export { register };

