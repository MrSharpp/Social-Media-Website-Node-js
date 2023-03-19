import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const PostDTO = z.object({
  description: z.string().min(10).max(255),
  user: z.number()
});

const DeletePostSchema = z.object({
  postId: z.number(),
  user: z.number()
});

export class PostClassDTO extends createZodDto(PostDTO) {}
export class DeleteClassDTO extends createZodDto(DeletePostSchema) {}
