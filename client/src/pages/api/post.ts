import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const PostDTO = z.object({
  description: z.string().min(10).max(255),
  user: z.number(),
});

const DeletePostSchema = z.object({
  postId: z.number(),
  user: z.number(),
});

export function Post() {
  axios.post('/post', {});
}
