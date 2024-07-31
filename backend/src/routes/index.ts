import { Router } from "express";
import { register } from "./register.routes";
import { login } from "./login.routes";
import { home } from "./home.routes";

const router = Router();

router.use("/register", register);
router.use("/login", login);
router.use("/home", home);

export { router };

