import _ from 'lodash';

export const basePath = 'https://dog.ceo/api';
export const mapRows = (data) => {
  if (_.isEmpty(data.rows)) return null;
  const keys = _.keys(data.rows[0]);
  return keys.length === 1 ? _.map(data.rows, (row) => row[keys[0]]) : data.rows;
};
