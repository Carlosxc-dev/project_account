class BaseError extends Error {
	public readonly statusCode: number;
	public readonly isOperational: boolean;
	constructor(message: string, status: number, isOperational = true) {
		super(message);
		Object.setPrototypeOf(this, BaseError.prototype);
		this.statusCode = status;
		this.isOperational = isOperational;
	}
}

// 404 error class
class NotFoundError extends BaseError {
	constructor(message: string) {
		super(message, 404);
		Object.setPrototypeOf(this, NotFoundError.prototype);
	}
}

// validation error class
class ValidationError extends BaseError {
	constructor(data: string) {
		super(data, 400);
		Object.setPrototypeOf(this, ValidationError.prototype);
	}
}

export { BaseError, NotFoundError, ValidationError };

