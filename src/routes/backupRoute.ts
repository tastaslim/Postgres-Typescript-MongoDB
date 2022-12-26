import { Router } from 'express';
import { BackupController } from '../controllers/backupController';
export const backupRoute = Router();
backupRoute.get('/backups', BackupController.listDefinitions);
backupRoute.post('/save', BackupController.saveDefinition);
backupRoute.get('/backups/:id', BackupController.getDefinition);
backupRoute.delete('/backups/:id', BackupController.deleteDefinition);
backupRoute.patch('/update', BackupController.updateDefinition);
