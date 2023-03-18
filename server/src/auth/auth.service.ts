import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DatabaseService } from 'src/prisma/prisma.service';
import { SignInCredentialsDto } from './dtos/signin-credentials.DTO';

@Injectable()
export class AuthService {
  constructor(private prisma: DatabaseService) {}

  async login(body: SignInCredentialsDto): Promise<User | undefined> {
    return;
  }
}
