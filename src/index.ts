import fastify from 'fastify'
import { transactionsRoute } from './routes/transactions'
const app = fastify({ logger: true })

app.register(transactionsRoute, { prefix: 'transactions' })

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
