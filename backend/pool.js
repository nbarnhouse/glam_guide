const pg = require("pg");
let pool;

if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    //Add these two properties
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  pool = new pg.Pool({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || "glam_guide",
  });
}

module.exports = pool;
