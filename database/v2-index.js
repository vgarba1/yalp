// for v2 team to write our own database query functions
const connection = require('./index.js');

const addDeals = (lat, lng, cb) => {
  // TODO for Iris
  const sql = ``;
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result, fields) => err ? reject(err) : resolve(result));
  });
};