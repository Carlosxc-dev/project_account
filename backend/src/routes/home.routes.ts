import { Router } from "express";

const home = Router();

home.get("/", (req, res) => {
	res.json({ message: "Hello, home!" });
});

export { home };
