import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  username: z.string().min(4),
  email: z.string().email(),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
      message:
        "Password shoyld be atleast 8 charector long and must contain Uppercasse, Lowercase, Numric and Special charector",
    }),
});

export type IRegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type ILoginSchema = z.infer<typeof loginSchema>;
