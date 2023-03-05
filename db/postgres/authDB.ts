import { User } from '../../types/auth.types';
import { BaseDBService } from './baseDB';

export class AuthDBService extends BaseDBService {
	async createUser(userParams: User) {
		const query = `INSERT INTO public.users (firstname, lastname, createdat, updateat, organizationid, password, emailaddress) VALUES
    ('${userParams.firstName}', '${userParams.lastName}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '${userParams.password}','${userParams.emailAddress}') RETURNING id`;
		return this.execute(query, []);
	}

	async getUser(emailaddress: string) {
		const query = `SELECT emailaddress, password FROM public.users WHERE emailaddress = '${emailaddress}'`;
		return this.executeScalar(query, []);
	}
}

export const authDBService = new AuthDBService();
