import express from "express";
import "dotenv/config";
import { router } from "./routes";
const cors = require("cors");

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
	})
);
app.use(express.json());

app.use(router);

const port = process.env.SERVER_PORT || 3030;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
