import { Body, Controller, Delete, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { DatabaseService } from 'src/prisma/prisma.service';
import { DeleteClassDTO, PostClassDTO } from './Post.DTO';

@Controller('/post')
export class PostController {
  constructor(private service: DatabaseService) {}

  @Delete()
  async delete(@Body() body: DeleteClassDTO, @Res() response: Response) {
    const user = await this.service.user.findFirst({
      where: {
        id: body.user
      },
      include: {
        Post: true
      }
    });

    if (!user) return response.status(401);
    for (const post of user.Post) {
      if (post.id == body.postId) {
        return this.service.post.delete({
          where: {
            id: body.postId
          }
        });
      }
    }
    return response.status(404).send({ message: 'Post Doesnt exsists' });
  }

  @Post()
  async post(@Body() body: PostClassDTO, @Res() response: Response) {
    const user = await this.service.user.findFirst({
      where: {
        id: body.user
      }
    });

    if (!user)
      return response.status(401).send({ message: 'User doesnt exists' });

    await this.service.post
      .create({
        data: {
          description: body.description,
          upvote: 0,
          downvote: 0,
          userId: body.user,
          views: 0,
          created: new Date()
        }
      })
      .catch((err) => {
        console.log(err);
        response.status(500).send({ message: 'Error while creating post' });
      });

    return response.status(200);
  }
}
