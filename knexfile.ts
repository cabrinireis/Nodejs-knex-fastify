// import type { Knex } from "knex";
// import path from "path";

// // Update with your config settings.

// const config: { [key: string]: Knex.Config } = {
//   development: {
//     client: "sqlite3",
//     connection: {
//       filename: path.resolve(__dirname, "dev.sqlite3")
//     },
//     useNullAsDefault: true,
//     migrations: {
//       extension: 'ts',
//       directory: path.resolve(__dirname, 'migrations')
//     }
//   },

//   // staging: {
//   //   client: "postgresql",
//   //   connection: {
//   //     database: "my_db",
//   //     user: "username",
//   //     password: "password"
//   //   },
//   //   pool: {
//   //     min: 2,
//   //     max: 10
//   //   },
//   //   migrations: {
//   //     tableName: "knex_migrations"
//   //   }
//   // },

//   // production: {
//   //   client: "postgresql",
//   //   connection: {
//   //     database: "my_db",
//   //     user: "username",
//   //     password: "password"
//   //   },
//   //   pool: {
//   //     min: 2,
//   //     max: 10
//   //   },
//   //   migrations: {
//   //     tableName: "knex_migrations"
//   //   }
//   // }

// };

// export default config


import { config } from './src/database'

export default config
