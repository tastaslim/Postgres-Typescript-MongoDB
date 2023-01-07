import { logger } from '../../config/logger.config';
import { Connection, connect, connection, disconnect } from 'mongoose';
let database: Connection;
export const mongoConnect = () => {
	if (database) return;

	connect('mongodb://localhost:27017/Taslim');
	database = connection;
	database.once('open', async () => {
		logger.info('Connected to database');
	});
	database.on('error', () => {
		logger.info('Error connecting to database');
	});
};
export const mongoDisconnect = () => {
	if (!database) return;
	disconnect();
};
