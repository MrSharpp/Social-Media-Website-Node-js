import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { DatabaseService } from 'src/prisma/prisma.service';
import { PostController } from './post.controller';

@Module({
  controllers: [PostController],
  providers: [DatabaseService]
})
export class PostModule {}
