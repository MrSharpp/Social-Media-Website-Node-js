import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const PostDTO = z.object({
  description: z.string().min(10).max(255),
  user: z.string().transform((data) => parseInt(data))
});

export class PostClassDTO extends createZodDto(PostDTO) {}
