import { Injectable } from '@nestjs/common';
import * as jwt from 'jwt-simple';

const SECRET = '6y8jg1M7ZsA3kbYbO0_-GLMvPKU_m7vAL-RDP_DWmjU';

@Injectable()
export class JwtService {
  encode<T>(payload: T): string {
    return jwt.encode(payload, SECRET);
  }

  decode<T>(token: string): T | null {
    try {
      return jwt.decode(token, SECRET);
    } catch (error) {
      return null;
    }
  }
}
