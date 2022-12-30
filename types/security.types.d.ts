import { Jwt } from 'jsonwebtoken';

export interface JwtPayload extends Jwt {
  userInfo: string;
}
