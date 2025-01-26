import pg from "pg"; // db
import dotenv from "dotenv"; // use .env files

// PostgreSQL

dotenv.config(); // load .env file

const Pool = pg.Pool;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

export default pool;

// https://node-postgres.com/guides/project-structure
