import type { NextApiRequest, NextApiResponse } from 'next';
import { axios } from './axios';
import z from 'zod';

export const PostDTO = z.object({
  description: z
    .string()
    .min(30, { message: 'Post should contain minimum 30 Characters' })
    .max(255, { message: 'Post should container max of 255 Characters' }),
  user: z.number(),
});

const DeletePostSchema = z.object({
  postId: z.number(),
  user: z.number(),
});

export function Post(body: z.infer<typeof PostDTO>) {
  console.log('er');

  return axios.post('/post', body).then((res) => res.data);
}

export function DeletePost(body: z.infer<typeof DeletePostSchema>) {
  return axios.post('/post/delete', body).then((res) => res.data);
}
