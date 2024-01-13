import z from "zod";

export const LoginSectionSchema = z.object({
  email: z.string().email({ message: "O campo email é obrigatório." }),
  name: z
    .string()
    .min(1, { message: "É necessário escrever seu primeiro nome" }),
  dateOfBirth: z
    .string()
    .refine((date) => new Date(date).toString() !== "Data inválida", {
      message: "É necessário inserir uma data de nascimento válida",
    })
    .transform((date) => new Date(date)),
});
