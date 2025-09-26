import {Knex, knex as setupKnex} from 'knex'

export const config: Knex.Config = {
    client: 'sqlite',
    connection: {
        filename: './tmp/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations:{
        extension: 'ts',
        directory: 'migrations'
    }
}

export const knex = setupKnex(config)