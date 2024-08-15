import { app } from "./app";

const port = process.env.SERVER_PORT || 3030;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

