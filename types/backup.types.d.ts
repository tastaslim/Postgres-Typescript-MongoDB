export type User = {
  params: {
    id: number;
  };
};
export interface createBackupDefinitionType {
  name: string;
  project_id: number;
  org_id: string;
  createdby: number;
  updatedby: number;
  backup_type: string;
}

export interface updateBackupDefinitionType {
  id: number;
  name: string;
  updatedby: number;
  is_active: boolean;
  is_deleted: boolean;
}
