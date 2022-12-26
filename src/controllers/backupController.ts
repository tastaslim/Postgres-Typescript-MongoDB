import { logger } from '../../config/loggerConfig';
import { ApiResponse } from '../../config/responseConfig';
import { Request, Response } from 'express';
import { BackupDefinitionModel } from '../../models/backupDefinitionModel';
import { backupService } from '../../db/postgres/backupDB';
class backupController {
  public async saveDefinition(req: Request, res: Response) {
    /*
    // MongoDB code
    try {
      const definition = new BackupDefinitionModel({
        name: req.body.name,
        project_id: req.body.project_id,
        org_id: req.body.org_id,
        backup_type: req.body.type,
        is_active: req.body.is_active,
        is_deleted: req.body.is_deleted,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by,
        new_tech: req.body.new_tech,
      });

      const response = await definition.save();
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error saving employee`);
      return ApiResponse.serverError(res, err);
    }
    */

    try {
      const response = await backupService.createBackupDefinition(req.body);
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error saving backup`);
      return ApiResponse.serverError(res, err);
    }
  }

  public async listDefinitions(req: Request, res: Response) {
    /*
    // MongoDB code
    try {
      const response = await BackupDefinitionModel.find();
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error listing employees`);
      return ApiResponse.serverError(res, err);
    }
    */

    try {
      const response = await backupService.listBackupDefinitions();
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error listing backups`);
      return ApiResponse.serverError(res, err);
    }
  }

  public async getDefinition(req: Request, res: Response) {
    /*
    // MongoDB code
    try {
      const employeeId = req.params.id;
      const response = await BackupDefinitionModel.findOne({ _id: employeeId });
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error getting employee`);
      return ApiResponse.serverError(res, err);
    }
    */

    try {
      const definitionId = req.params.id;
      const response = await backupService.getBackupDefinition(definitionId);
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error getting backup`);
      return ApiResponse.serverError(res, err);
    }
  }

  public async deleteDefinition(req: Request, res: Response) {
    try {
      const employeeId = req.params.id;
      const response = await BackupDefinitionModel.deleteOne({ _id: employeeId });
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error removing employee`);
      return ApiResponse.serverError(res, err);
    }
  }

  public async updateDefinition(req: Request, res: Response) {
    try {
      const response = await BackupDefinitionModel.updateMany(req.body);
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error removing employee`);
      return ApiResponse.serverError(res, err);
    }
  }
}

export const BackupController = new backupController();
