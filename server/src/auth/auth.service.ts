import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DatabaseService } from 'src/prisma/prisma.service';
import {
  SignInCredentialsDto,
  SignUpCredentialsDto
} from './dtos/signin-credentials.DTO';
import * as bcrypt from 'bcrypt';
import axios from 'axios';
@Injectable()
export class AuthService {
  constructor(private prisma: DatabaseService) {}

  async login(body: SignInCredentialsDto): Promise<User | undefined> {
    return this.prisma.user.findFirst({
      where: {
        email: body.email
      }
    });
  }

  async emailUnique(email: string) {
    return await this.prisma.user.findFirst({ where: { email } });
  }

  async usernameUnique(username: string) {
    return await this.prisma.user.findFirst({ where: { username } });
  }

  async register(body: SignUpCredentialsDto): Promise<User | undefined> {
    return this.prisma.user.create({
      data: {
        email: body.email,
        username: body.username,
        password: await bcrypt.hash(body.password, 10),
        role: 'USER',
        intractedPosts: JSON.stringify({ upvotes: [], downvotes: [] })
      }
    });
  }
}
