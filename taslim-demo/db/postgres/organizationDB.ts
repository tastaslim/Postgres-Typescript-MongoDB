import { BaseDBService } from './baseDB';

export class OrganizationDBService extends BaseDBService {
  async isValidOrganization(organizationId: number, userId: number) {
    const query = `SELECT * FROM public.organizationusers ou WHERE ou.organization_id = ${organizationId} AND ou.user_id = ${userId}`;
    return this.execute(query, []);
  }
}

export const organizationDBService = new OrganizationDBService();
