import { Router } from 'express';
import { BackupController } from '../controllers/backupController';
import { routeValidationMiddleware } from '../../middleware/joi/base.validation';
import { createBackupDefinitionSchema } from '../../middleware/joi/backup.validation';
import { apiVersion } from '../../config/apiConfig';

export const backupRoute = Router();
const basePath = `/api/${apiVersion}/backups`;
backupRoute.get(`${basePath}`, BackupController.listDefinitions);
backupRoute.post(`${basePath}/save`, routeValidationMiddleware(createBackupDefinitionSchema), BackupController.saveDefinition);
backupRoute.get(`${basePath}/:id/get`, BackupController.getDefinition);
backupRoute.delete(`${basePath}/:id/delete`, BackupController.deleteDefinition);
backupRoute.patch(`${basePath}/:id/update`, BackupController.updateDefinition);
