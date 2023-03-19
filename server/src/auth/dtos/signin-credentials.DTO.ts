import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CredentialsSchema = z.object({
  email: z.string().email('Not a valid email').describe('Email'),
  password: z.string().nonempty().describe('password')
});

const SignupSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string()
});

export class SignInCredentialsDto extends createZodDto(CredentialsSchema) {}
export class SignUpCredentialsDto extends createZodDto(SignupSchema) {}
