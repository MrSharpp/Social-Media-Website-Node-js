import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/prisma/prisma.service';
import { JwtService } from 'src/shared/jwt.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, JwtService, DatabaseService]
})
export class AuthModule {}
