import { CustomError } from "../utils/CustomError";

class AuthenticationError extends CustomError {
	constructor(public message: string) {
		super(message);
		Object.setPrototypeOf(this, AuthenticationError.prototype);
	}

	statusCode = 500;
	serialize() {
		return { message: this.message };
	}
}

export { AuthenticationError };

