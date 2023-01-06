import Joi from 'joi';
export const createBackupDefinitionSchema = Joi.object({
  name: Joi.string().required(),
  project_id: Joi.number().required(),
  org_id: Joi.number().required(),
  createdby: Joi.number().required(),
  updatedby: Joi.number().required(),
  backup_type: Joi.string().required(),
});
