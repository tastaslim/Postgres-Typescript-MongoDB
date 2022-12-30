import _ from 'lodash';

export const basePath = 'https://dog.ceo/api';
export const mapRows = (data) => {
  if (_.isEmpty(data.rows)) return null;
  const keys = _.keys(data.rows[0]);
  return keys.length === 1 ? _.map(data.rows, (row) => row[keys[0]]) : data.rows;
};

export const apiVersion = 'v1';
export const EXPIRY_TIME = '7d'; // 7 days
export const SECRET_KEY = 'TASLIM_SECRET_KEY';
export const ENCRYPTION_KEY = 'TASLIM_ENCRYPTION_KEY';
