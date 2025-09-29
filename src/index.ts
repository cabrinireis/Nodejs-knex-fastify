import fastify from 'fastify'
import { transactionsRoute } from './routes/transactions'

const server = fastify()

server.register(transactionsRoute)

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
