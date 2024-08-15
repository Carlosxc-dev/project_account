import { Router } from "express";
import { createRegisterController } from "../modules/users/useCases/createRegister/index";
import { listRegisterController } from "../modules/users/useCases/listRegister";
import { deleteRegisterController } from "../modules/users/useCases/deleteRegister";
import { updateRegisterController } from "../modules/users/useCases/update";
import { AuthenticateToken } from "../middleware/authenticateToken";

const register = Router();
const authenticateToken = new AuthenticateToken();

register.post("/", (req, res, next) => {
	return createRegisterController.handle(req, res, next);
});

register.get("/", (req, res, next) => {
	return listRegisterController.handle(req, res, next);
});

register.delete("/", authenticateToken.protected, (req, res, next) => {
	return deleteRegisterController.handle(req, res, next);
});

register.put("/", authenticateToken.protected, (req, res, next) => {
	return updateRegisterController.handle(req, res, next);
});

export { register };

