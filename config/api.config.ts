import { keys, isEmpty, map } from 'lodash';

export const basePath = 'https://dog.ceo/api';
export const mapRows = (data) => {
	if (isEmpty(data.rows)) return null;
	const rowKeys = keys(data.rows[0]);
	return rowKeys.length === 1 ? map(data.rows, (row) => row[rowKeys[0]]) : data.rows;
};

export const apiVersion = 'v1';
export const EXPIRY_TIME = '7d'; // 7 days
export const SECRET_KEY = 'TASLIM_SECRET_KEY';
export const ENCRYPTION_KEY = 'TASLIM_ENCRYPTION_KEY';
