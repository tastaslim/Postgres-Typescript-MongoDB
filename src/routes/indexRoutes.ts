import { authRoute } from './authRoute';
import { apiKeyMiddleware } from './../../middleware/auth/apiKeyAuth.middleware';
import { jwtAuthMiddleware } from '../../middleware/auth/jwtAuth.middleware';
import { characterRoute } from './characterRoute';
import { backupRoute } from './backupRoute';
import { Express } from 'express-serve-static-core';
import { sqlInjectionMiddleware } from '../../util/sqlinjection.util';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import passport from 'passport';
export const registerMiddleware = (expressApp: Express) => {
	expressApp.set('trust proxy', true);
	expressApp.use(express.json({ limit: '500mb' }));
	expressApp.use(cors());
	expressApp.use(compression());
	expressApp.use(helmet());
	expressApp.use(sqlInjectionMiddleware);
	expressApp.use(passport.initialize());
	expressApp.use(apiKeyMiddleware);
	expressApp.use(jwtAuthMiddleware);
	expressApp.use(express.urlencoded({ limit: '500mb', extended: false }));
};

export const registerRoutes = (expressApp: Express) => {
	expressApp.use(backupRoute);
	expressApp.use(characterRoute);
	expressApp.use(authRoute);
};
