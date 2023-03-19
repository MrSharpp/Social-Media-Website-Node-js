import {
  Body,
  Controller,
  HttpCode,
  Post,
  Res,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from 'src/shared/jwt.service';
import { AuthService } from './auth.service';
import {
  SignInCredentialsDto,
  SignUpCredentialsDto
} from './dtos/signin-credentials.DTO';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(
    private authServie: AuthService,
    private readonly jwtService: JwtService
  ) {}

  @HttpCode(200)
  @Post('/login')
  async login(
    @Body() signinCredential: SignInCredentialsDto
  ): Promise<{ token: string }> {
    const user = await this.authServie.login(signinCredential);

    // validation for password
    const answe = await bcrypt.compare(
      signinCredential.password,
      user?.password || ''
    );

    delete user.password;

    if (!answe || !user) throw new UnauthorizedException('Invalid Credentials');
    return { token: this.jwtService.encode(user) };
  }

  @HttpCode(200)
  @Post('/register')
  async register(
    @Body() signinCredential: SignUpCredentialsDto,
    @Res() response: Response
  ) {
    if (await this.authServie.emailUnique(signinCredential.email))
      return response
        .status(409)
        .send({ message: 'User with this email already exsists' });

    if (await this.authServie.usernameUnique(signinCredential.username))
      return response
        .status(409)
        .send({ message: 'User with this username already exsists' });

    const user = await this.authServie.register(signinCredential);

    return response.status(200).send({ token: this.jwtService.encode(user) });
  }
}
