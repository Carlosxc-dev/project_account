import { Request, Response, NextFunction } from "express";
import { Auth } from "../routes/auth.routes";

class AuthenticateToken {
	private auth: Auth;
	constructor() {
		this.auth = new Auth();
		this.protected = this.protected.bind(this);
	}

	public protected(req: Request, res: Response, next: NextFunction) {
		const token = req.cookies.token;

		if (!token) {
			return res.status(401).send("Authorization header is missing");
		}

		console.log(token);

		const decoded = this.auth.verifyToken(token);

		if (!decoded) {
			return res.status(401).send("Invalid or expired token");
		}

		next();
	}
}

export { AuthenticateToken };

