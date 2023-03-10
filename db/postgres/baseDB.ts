import { logger } from '../../config/logger.config';
import { mapRows } from '../../config/api.config';
import { createClient } from './configDB';
import { mapScalar } from './dataMapperDB';

export class BaseDBService {
	//   public static async query(sql: string, params?: any) {
	//     const client = await pool.connect();
	//     try {
	//         const result = await client

	async _execute(query: string, values, mapperFunction: typeof mapRows | typeof mapScalar) {
		const client = await createClient();
		try {
			const data = await client.query(query, values || []);
			const result = mapperFunction(data);
			return result;
		} catch (err) {
			logger.error(`Query(${query}) | Error(${err}))`);
		}
	}

	async execute(query: string, values) {
		try {
			return this._execute(query, values, mapRows);
		} catch (err) {
			logger.error(`Query(${query}) | Error(${err}))`);
		}
	}

	async executeScalar(query: string, values) {
		try {
			return this._execute(query, values, mapScalar);
		} catch (err) {
			logger.error(`Error executing query: ${query}`);
		}
	}
}
