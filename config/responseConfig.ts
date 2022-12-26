import { Response } from 'express';

export class ApiResponse {
  public static success(res: Response, data, message = 'OK') {
    return res.json({
      data,
      status: 200,
      message,
    });
  }
  public static serverError(res: Response, error: Error) {
    return res.json({
      error: error.message,
      status: 500,
    });
  }

  public static badRequest(res: Response, error: Error) {
    return res.json({
      error: error.message,
      status: 400,
    });
  }
}
