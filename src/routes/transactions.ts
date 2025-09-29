import { FastifyInstance } from "fastify"
import knex from "knex"

export async function transactionsRoute (app: FastifyInstance ) {
    app.get('/hello', async () => {
      const transactions = knex('transactions')
      .where('amount', 1000)
      .select('*')
      return transactions
    })
}