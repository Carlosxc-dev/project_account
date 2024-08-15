// src/utils/responses.ts

const ResponseSuccess = {
	userCreated: {
		statusCode: 201,
		message: "User created successfully!",
	},
	dataRetrieved: {
		statusCode: 200,
		message: "Data retrieved successfully!",
	},
	userUpdated: {
		statusCode: 200,
		message: "User updated successfully!",
	},
	userDeleted: {
		statusCode: 200,
		message: "User deleted successfully!",
	},
	loginSuccess: {
		statusCode: 200,
		message: "Login successful!",
	},
	logoutSuccess: {
		statusCode: 200,
		message: "Logout successful!",
	},
	passwordReset: {
		statusCode: 200,
		message: "Password reset successfully!",
	},
	accountVerified: {
		statusCode: 200,
		message: "Account verified successfully!",
	},
	dataSaved: {
		statusCode: 201,
		message: "Data saved successfully!",
	},
	operationCompleted: {
		statusCode: 200,
		message: "Operation completed successfully!",
	},
};

export { ResponseSuccess };

