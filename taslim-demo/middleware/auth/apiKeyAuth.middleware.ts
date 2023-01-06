import { isValidGuid } from './../../util/validator.util';
import { Request, Response, NextFunction } from 'express';
import { some } from 'lodash';
import { allowedURLPathsApiKey } from '../../config/allowedURLPathConfig';
import { ApiResponse } from '../../config/responseConfig';
import { logger } from '../../config/loggerConfig';
export const apiKeyMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void | ApiResponse> => {
  if (some(allowedURLPathsApiKey, (path) => req.path === path)) return next();
  const apiKeyFromRequest = req.headers['x-api-key'];
  if (apiKeyFromRequest && typeof apiKeyFromRequest !== 'string') {
    return ApiResponse.badRequest(res, 'BAD_REQUEST_ERROR');
  }
  if (!apiKeyFromRequest) {
    logger.error(`Path(${req.path}) | IP(${req.ip}) | Message(API_KEY_NOT_FOUND) | Method(${req.method})`);
    return ApiResponse.unAuthorized(res, 'API_KEY_NOT_FOUND_ERROR');
  }

  const isValidApiKey = isValidGuid(apiKeyFromRequest);
  if (!isValidApiKey && apiKeyFromRequest !== process.env.API_KEY) {
    logger.error(`Path(${req.path}) | IP(${req.ip}) | Message(INVALID_API_KEY) | Method(${req.method})`);
    return ApiResponse.unAuthorized(res, 'UNAUTHORIZED_ERROR');
  }

  return next();
};