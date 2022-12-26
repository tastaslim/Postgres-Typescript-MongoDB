import { BaseDBService } from './baseDB';

export class BackupDBService extends BaseDBService {
  async listBackupDefinitions() {
    const query = 'SELECT * FROM backup.definitions';
    return this.execute(query, []);
  }

  async getBackupDefinition(definitionId: string) {
    const query = `SELECT * FROM backup.definitions d WHERE d.id = ${definitionId}`;
    return this.executeScalar(query, []);
  }

  async createBackupDefinition(body) {
    const query = `INSERT INTO backup.definitions ("name", project_id, org_id, createdat, updatedat, createdby, updatedby, is_active, is_deleted, backup_type) 
                  VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $4, $5, bit'1', bit'0', $6)`;
    return this.execute(query, [body.name, body.project_id, body.org_id, body.createdby, body.updatedby, body.backup_type]);
  }
}

export const backupService = new BackupDBService();
