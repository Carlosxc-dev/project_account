import { z } from "zod";

const createRegisterSchema = z.object({
	name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
	userName: z.string().min(3, { message: "Username must be at least 3 characters long" }),
	password: z.number(),
});

export { createRegisterSchema };
