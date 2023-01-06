import { Response, Request } from 'express';
import { ApiResponse } from '../../config/responseConfig';
import { authDBService } from '../../db/postgres/authDB';
import { securityService } from '../../util/security/securityProvider.util';
class authController {
  public async registerUser(req: Request, res: Response) {
    try {
      req.body.password = securityService.saltText(req.body.password);
      const data = await authDBService.createUser(req.body);
      return ApiResponse.success(res, data);
    } catch (error) {
      console.error(error);
      return ApiResponse.serverError(res, error);
    }
  }
}

export const AuthController = new authController();
