const { Pool } = require("pg");
require("dotenv").config();

config = {
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 300,
  idleTimeoutMillis: 200,
  max: 10,
};

const pool = new Pool(config);

pool.on("connect", (client) => {
  console.log("connected to the db");
});

pool.on("remove", (client) => {
  console.log("client removed");
});

module.exports = pool;
