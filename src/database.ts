import 'dotenv/config'
import { Knex, knex as setupKnex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATATABE_URL || '',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: 'migrations',
  },
}

export const knex = setupKnex(config)
