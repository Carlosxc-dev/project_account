import { Router } from "express";
import { loginController } from "../modules/users/useCases/login";

const login = Router();

login.post("/", (req, res, next) => {
	loginController.handle(req, res, next);
});

export { login };

