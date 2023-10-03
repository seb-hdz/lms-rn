import { z } from "zod";

export const registerSchema = z.object({
  document: z
    .string({ required_error: "Debes ingresar tu DNI o CE" })
    .min(6, "Debes ingresar al menos 6 caracteres"),
  code: z
    .string({ required_error: "Debes ingresar tu código de estudiante" })
    .length(8, "Debes ingresar 8 dígitos"),
  email: z
    .string({ required_error: "Debes ingresar un email" })
    .email("Debes ingresar un correo válido"),
  password: z
    .string({ required_error: "Debes ingresar una contraseña" })
    .min(8, "Debes ingresar al menos 8 caracteres"),
  terms: z.boolean({
    required_error: "Debes aceptar los términos de privacidad de UNMSM",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
