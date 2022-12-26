import _ from 'lodash';
export const mapRows = (data) => {
  if (_.isEmpty(data.rows)) return null;
  const keys = _.keys(data.rows[0]);
  return keys.length === 1 ? _.map(data.rows, (row) => row[keys[0]]) : data.rows;
};

export const mapScalar = (data) => {
  if (_.isEmpty(data.rows)) return null;
  if (data.rows.length > 1) throw new Error('Execute scalar can only return a single row');
  const keys = _.keys(data.rows[0]);
  return keys.length === 1 ? data.rows[0][keys[0]] : data.rows[0];
};
