# 🚀 Node.js + Fastify + Knex Boilerplate

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Fastify](https://img.shields.io/badge/Fastify-%3E=4.0-black.svg)](https://www.fastify.io/)
[![Knex.js](https://img.shields.io/badge/Knex.js-QueryBuilder-blue.svg)](https://knexjs.org/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](LICENSE)

> Boilerplate de uma API REST utilizando **Node.js**, **Fastify** e **Knex.js** com suporte a TypeScript, ambiente configurável com `.env`, ESLint e estrutura modular.

---

## 📦 Tecnologias

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [Knex.js](https://knexjs.org/)
- Banco de dados relacional (PostgreSQL, MySQL, SQLite, etc.)
- TypeScript
- Dotenv
- ESLint

---

## 📁 Estrutura de Pastas

## 📁 Estrutura de Pastas

```txt
.
├── db/
│   └── migrations/        # Migrações com Knex
├── src/
│   ├── controllers/       # Lógica dos endpoints
│   ├── routes/            # Arquivos de rotas Fastify
│   ├── services/          # Lógica de negócios (opcional)
│   └── server.ts          # Inicialização da aplicação
├── knexfile.ts            # Configurações do Knex
├── .env.exemple           # Exemplo de variáveis de ambiente
├── package.json
└── tsconfig.json
```

---


---

## ⚙️ Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/cabrinireis/Nodejs-knex-fastify.git
cd Nodejs-knex-fastify
```
2. **Instale as dependências**
```bash
npm install
# ou
yarn install

```
3. **Configure o ambiente**
```bash
cp .env.exemple .env
```
Edite o .env com as variáveis de ambiente necessárias (ex: URL do banco, porta da API etc).

4. **Rode as migrações**
```bash 
npx knex migrate:latest
```

5. **Inicie a aplicação**
```bash 
npm run dev
```

Endpoints (Exemplo)

| Método | Rota         | Descrição               |
| ------ | ------------ | ----------------------- |
| GET    | `/items`     | Lista todos os itens    |
| GET    | `/items/:id` | Retorna item por ID     |
| POST   | `/items`     | Cria um novo item       |
| PUT    | `/items/:id` | Atualiza item existente |
| DELETE | `/items/:id` | Remove um item          |

Substitua com os endpoints reais da sua API.

## 📝 Checklist de melhorias futuras

- [ ] Validação de dados com `Zod` ou `Joi`
- [ ] Integração com banco PostgreSQL em produção
- [ ] Autenticação JWT
- [ ] Swagger / documentação automática
- [ ] Deploy com Docker / Heroku / Railway

---

## 🧑‍💻 Autor

Feito com ❤️ por [Cabrini Reis](https://github.com/cabrinireis)

---


