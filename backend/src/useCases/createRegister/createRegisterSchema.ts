import { z } from "zod";

const createRegisterSchema = z.object({
	name: z.string(),
	userName: z.string().min(3, { message: "Username must be at least 3 characters long" }),
	password: z.number().gte(5),
});

export { createRegisterSchema };
