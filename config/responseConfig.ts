import { Response } from 'express';

export class ApiResponse {
  public static success(res: Response, data, message = 'OK') {
    return res.json({
      data,
      status: 200,
      message,
    });
  }
  public static serverError(res: Response, error: string) {
    return res.json({
      message: error,
      status: 500,
    });
  }

  public static badRequest(res: Response, error: Error | string) {
    return res.json({
      message: error instanceof Error ? error.message : error,
      status: 400,
    });
  }

  public static notFound(res: Response, error: Error | string) {
    return res.json({
      message: error instanceof Error ? error.message : error,
      status: 404,
    });
  }

  public static unAuthorized(res: Response, error: Error | string) {
    return res.json({
      message: error instanceof Error ? error.message : error,
      status: 401,
    });
  }

  public static forbidden(res: Response, error: Error | string) {
    return res.json({
      message: error instanceof Error ? error.message : error,
      status: 403,
    });
  }

  public static unprocessableEntity(res: Response, error: Error | string) {
    return res.json({
      message: error instanceof Error ? error.message : error,
      status: 422,
    });
  }
}
