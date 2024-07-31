import { Router } from "express";

const login = Router();

login.get("/", (req, res) => {
	res.json({ message: "Hello, login!" });
});

export { login };

