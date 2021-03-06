// Update with your config settings.
//to set up a container in docker for dvmnt: docker run --name container -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
//postgres://${process.env.PG_USER}:${process.env.APP_DB_ADMIN_PASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PG_DATABASE}
require("dotenv").config();

const connect = {
  client: "pg",
  connection: `postgres://${process.env.PG_USER}:${process.env.APP_DB_ADMIN_PASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PG_DATABASE}`,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = {
  development: {
    client: "pg",
    connection: `postgres://postgres:bacon@localhost:5432/weatherappdb`,
    ssl: {
      rejectUnauthorized: false,
    },
  },

  staging: connect,
  production: connect,
};
