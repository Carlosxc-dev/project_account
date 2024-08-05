import { Router } from "express";
import { register } from "./register.routes";
import { login } from "./login.routes";
import { home } from "./home.routes";
import { AuthenticateToken } from "../middleware/authenticateToken";

const authenticateToken = new AuthenticateToken();

const router = Router();

//public
router.use("/register", register);
router.use("/login", login);

//protegida
router.use("/home", authenticateToken.protected, home);

export { router };

