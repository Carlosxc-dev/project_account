import express from "express";
import "dotenv/config";
import { router } from "./routes";
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);
app.use(express.json());
app.use(cookieParser());

app.use(router);

const port = process.env.SERVER_PORT || 3030;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

