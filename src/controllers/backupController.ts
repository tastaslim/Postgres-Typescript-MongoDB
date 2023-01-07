import { ReqUser } from './../../types/requser.types.d';
import { logger } from '../../config/logger.config';
import { ApiResponse } from '../../config/response.config';
import { Request, Response } from 'express';
// import { BackupDefinitionModel } from '../../models/backupDefinitionModel';
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

	public async listDefinitions(req: Request | ReqUser, res: Response) {
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
			const { user } = req.user as ReqUser;
			const response = await backupService.listBackupDefinitions(user.organizationId);
			return ApiResponse.success(res, response);
		} catch (err) {
			logger.error(`Error(${err}) | Message(Error listing backups)`);
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
		/*
    // MongoDB code
    try {
      const employeeId = req.params.id;
      const response = await BackupDefinitionModel.deleteOne({ _id: employeeId });
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error removing employee`);
      return ApiResponse.serverError(res, err);
    }
    */

		try {
			const definitionId = req.params.id;
			const response = await backupService.getBackupDefinition(definitionId);
			return ApiResponse.success(res, response);
		} catch (err) {
			logger.error(`Error deleting backup`);
			return ApiResponse.serverError(res, err);
		}
	}

	public async updateDefinition(req: Request, res: Response) {
		/*
    // MongoDB code
    try {
      const response = await BackupDefinitionModel.updateMany(req.body);
      return ApiResponse.success(res, response);
    } catch (err) {
      logger.error(`Error removing employee`);
      return ApiResponse.serverError(res, err);
    }
    */

		try {
			const response = await backupService.updateBackupDefinition(req.body);
			return ApiResponse.success(res, `Definition Updated Successfully ${response}`);
		} catch (err) {
			logger.error(`Error updating backup`);
			return ApiResponse.serverError(res, err);
		}
	}
}

export const BackupController = new backupController();
