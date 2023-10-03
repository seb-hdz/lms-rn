import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Debes ingresar un email" })
    .email("Debes ingresar un correo válido"),
  password: z
    .string({ required_error: "Debes ingresar una contraseña" })
    .min(8, "Debes ingresar al menos 8 caracteres"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
