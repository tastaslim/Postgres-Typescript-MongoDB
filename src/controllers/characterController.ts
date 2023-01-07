import { logger } from '../../config/logger.config';
import { Response, Request } from 'express';
import { ApiResponse } from '../../config/response.config';
import { basePath } from '../../config/api.config';
import axios from 'axios';
export class CharacterController {
	public async listCharacters(req: Request, res: Response) {
		try {
			logger.info(`Message(Listing characters)`);
			const url = `${basePath}/breeds/list/all`;
			const response = await axios.get(url);
			const data = JSON.stringify(response.data);
			return ApiResponse.success(res, data);
		} catch (error) {
			logger.error(`Error fetching characters`);
			return ApiResponse.serverError(res, error);
		}
	}
}
