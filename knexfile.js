// Update with your config settings.
//to set up a container in docker for dvmnt: docker run --name container -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:docker@localhost/weatherapp'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
