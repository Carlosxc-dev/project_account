import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/CustomError";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	// Verifica se o erro é uma instância de CustomError
	if (err instanceof CustomError) {
		// Se for, envia uma resposta com o código de status e o objeto serializado
		return res.status(err.statusCode).send(err.serialize());
	}

	// Caso seja um erro genérico, retorna uma resposta 500 (Internal Server Error)
	res.status(500).send({
		message: "Something went wrong",
	});
};

export { errorHandler };

