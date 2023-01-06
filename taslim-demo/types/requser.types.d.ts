import { Request } from 'express';
export interface ReqUser extends Request {
  user: { organizationId: number; userId: number };
}
