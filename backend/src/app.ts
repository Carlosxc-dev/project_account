import express from "express";
import "dotenv/config";
import { router } from "./routes";
import { errorHandler } from "./middleware/errorHandler";
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

app.use(errorHandler); // Add this line to the end of the middleware stack  (before the app.listen() call) to handle errors globally in the application.

export { app };

