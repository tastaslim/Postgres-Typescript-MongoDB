/* eslint-disable @typescript-eslint/no-unused-vars */
import { registerRoutes, registerMiddleware } from './src/routes/indexRoutes';
import express, { NextFunction, Response, Request } from 'express';
import { logger } from './config/loggerConfig';
import { ApiResponse } from './config/responseConfig';
import { ValidationModel } from './middleware/joi/validationModel';
const app = express();
registerMiddleware(app);
registerRoutes(app);
app.use((err: Error | ValidationModel, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationModel) {
    logger.error(`Error: ${JSON.stringify(err.messages)}`);
    return ApiResponse.unprocessableEntity(res, err.messages);
  } else {
    return ApiResponse.serverError(res, `Error: ${err}`);
  }
});

app.use((req: Request, res: Response, next: NextFunction) => ApiResponse.notFound(res, 'ROUTE_NOT_FOUND'));

app.listen(3000, () => {
  logger.info('Server started on port 3000');
});
