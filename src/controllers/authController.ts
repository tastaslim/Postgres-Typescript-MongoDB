import { logger } from '../../config/loggerConfig';
import { Response, Request } from 'express';
import { ApiResponse } from '../../config/responseConfig';
import { saltText } from '../../util/security.util';
import { authDBService } from '../../db/postgres/authDB';
class authController {
  public async registerUser(req: Request, res: Response) {
    try {
      req.body.password = saltText(req.body.password);
      const data = await authDBService.createUser(req.body);
      return ApiResponse.success(res, data);
    } catch (error) {
      logger.error(error);
      return ApiResponse.serverError(res, error);
    }
  }
}

export const AuthController = new authController();
