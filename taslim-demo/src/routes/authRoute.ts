import { Router } from 'express';
import { apiVersion } from '../../config/apiConfig';
import { AuthController } from '../controllers/authController';

export const authRoute = Router();
const basePath = `/api/${apiVersion}/auth`;
authRoute.post(`${basePath}/token`, AuthController.registerUser);
