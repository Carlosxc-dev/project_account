import { z } from "zod";

const validationCreateMoneySchema = z.object({
	id_account: z.number().min(1),
	name: z.string().min(3),
	value: z.number().min(1),
	option: z.boolean(),
	pago: z.boolean(),
});

const validationDeleteMoneySchema = z.object({
	id: z.number().min(1),
});

const validationUpdateMoneySchema = z.object({
	id: z.number().min(1),
	name: z.string().min(3),
	value: z.number().min(1),
	option: z.boolean(),
	pago: z.boolean(),
});

const validationListMoneySchema = z.object({
	id: z.number().min(1),
});

export {
	validationCreateMoneySchema,
	validationDeleteMoneySchema,
	validationUpdateMoneySchema,
	validationListMoneySchema,
};

