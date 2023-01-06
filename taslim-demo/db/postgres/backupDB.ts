import { createBackupDefinitionType, updateBackupDefinitionType } from '../../types/backup.types';
import { BaseDBService } from './baseDB';

export class BackupDBService extends BaseDBService {
  async listBackupDefinitions(organizationId: number) {
    const query = `SELECT * FROM backup.definitions d
      JOIN public.projects p ON p.id = d.project_id 
      JOIN public.organizations o ON o.id = p.organization_id
      WHERE d.is_deleted = BIT'0' AND o.id = ${organizationId}`;
    return this.execute(query, []);
  }

  async getBackupDefinition(definitionId: string) {
    const query = `SELECT * FROM backup.definitions d WHERE d.id = ${definitionId}`;
    return this.executeScalar(query, []);
  }

  async createBackupDefinition(body: createBackupDefinitionType) {
    const query = `INSERT INTO backup.definitions ("name", project_id, org_id, createdat, updatedat, createdby, updatedby, is_active, is_deleted, backup_type) 
                  VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $4, $5, BIT'1', BIT'0', $6)`;
    return this.execute(query, [body.name, body.project_id, body.org_id, body.createdby, body.updatedby, body.backup_type]);
  }

  async deleteBackupDefinition(definitionId: string) {
    const query = `DELETE FROM backup.definitions d WHERE d.id = ${definitionId}`;
    return this.executeScalar(query, []);
  }

  async updateBackupDefinition(body: updateBackupDefinitionType) {
    const query = `UPDATE backup.definitions SET "name" = $1, updatedat = CURRENT_TIMESTAMP, updatedby = $2, is_active = $3, is_deleted = $4
                  WHERE id = ${body.id} RETURNING id`;
    return this.executeScalar(query, [body.name, body.updatedby, body.is_active, body.is_deleted]);
  }
}

export const backupService = new BackupDBService();
