import { Router } from "express";
import { createRegisterController } from "../useCases/createRegister/index";

const register = Router();

register.post("/", (req, res) => {
	return createRegisterController.handle(req, res);
});

export { register };

