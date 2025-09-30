import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { knexSql } from "../database"

export async function transactionsRoute (app: FastifyInstance ) {

    app.get('/', async () => {
    const transactions = await knexSql('transactions').select()
    return { transactions }
  })

  app.get('/:id', async (request) => {
    const getTransactionsParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionsParamsSchema.parse(request.params)

    const transaction = await knexSql('transactions').where('id', id).first()
    return {
      transaction,
    }
  })
    app.post('/', async (request, reply) => {
        const createTransactionsBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit']),
        })

        const { title, amount, type} = createTransactionsBodySchema.parse(request.body)
        const amountBytype = type === 'credit' ? amount : amount * -1
        await knexSql('transactions').insert({
            id: crypto.randomUUID(),
            title,
            amount: amountBytype
        })

        return reply.status(200).send()
    })
}