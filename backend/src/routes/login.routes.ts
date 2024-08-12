import { Router } from "express";
import { loginController } from "../modules/users/useCases/login";

const login = Router();

login.post("/", (req, res) => {
	loginController.handle(req, res);
});

export { login };

