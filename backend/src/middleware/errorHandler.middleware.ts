// middlewares/errorHandler.js
import { Request, Response, NextFunction } from "express";
import { BaseError, NotFoundError, ValidationError } from "../err/Error";

const errorHandler = (err: NotFoundError, req: Request, res: Response, next: NextFunction) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	res.status(statusCode).json({
		success: false,
		message: message,
	});
};

export { errorHandler };

