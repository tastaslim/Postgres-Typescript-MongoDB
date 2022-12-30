import { User } from '../../types/auth.types';
import { BaseDBService } from './baseDB';

export class AuthDBService extends BaseDBService {
  async createUser(userParams: User) {
    const query = `INSERT INTO public.users (firstname, lastname, createdat, updateat, organizationid, "password", emailaddress) VALUES 
    ('${userParams.firstName}', '${userParams.lastName}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, ${userParams.organizationId}, '${userParams.password}','${userParams.emailAddress}') RETURNING id`;
    return this.execute(query, []);
  }
}

export const authDBService = new AuthDBService();
