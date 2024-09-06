import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json"; // Path to your JSON file

import "dotenv/config";
import { router } from "./routes";
import { errorHandler } from "./middleware/errorHandler";
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
	cors({
		origin: 'https://project-account-frontend.onrender.com',
		credentials: true,
	})
);
app.use(express.json());
app.use(cookieParser());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Adicione essa linha para servir a documentação Swagger UI na rota /api-docs

app.use(router);

app.use(errorHandler); // Add this line to the end of the middleware stack  (before the app.listen() call) to handle errors globally in the application.

export { app };

