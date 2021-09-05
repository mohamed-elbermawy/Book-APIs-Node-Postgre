const pool = require("./pool");

exports.connection = (query, values) => {
  return new Promise((resolve, reject) => {
    // promise
    pool
      .query(query, values)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
