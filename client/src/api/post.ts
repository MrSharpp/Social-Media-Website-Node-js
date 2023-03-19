import type { NextApiRequest, NextApiResponse } from 'next';
import { axios } from './axios';
import z from 'zod';

const PostDTO = z.object({
  description: z.string().min(10).max(255),
  user: z.number(),
});

const DeletePostSchema = z.object({
  postId: z.number(),
  user: z.number(),
});

export function Post(body: z.infer<typeof PostDTO>) {
  return axios.post('/post', body).then((res) => res.data);
}

export function DeletePost(body: z.infer<typeof DeletePostSchema>) {
  return axios.post('/post/delete', body).then((res) => res.data);
}
