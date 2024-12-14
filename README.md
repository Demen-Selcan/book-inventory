# Next.js Book Inventory

Demo: https://next-books-search.vercel.app

This is a book inventory app built with Next.js, Drizzle, and PostgreSQL. The database contains over 2,000,000 books from Goodreads. [Full dataset here](https://mengtingwan.github.io/data/goodreads.html).

## Database Setup

## 1 Create Postgres DB and run below script

This is currently using a Postgres extension called `unaccent` to remove accents from the book titles. This also uses the pgvector extension to use Postgres as a vector store. To install these extensions, run the following command on your database:

```sql
CREATE EXTENSION IF NOT EXISTS unaccent;
CREATE EXTENSION IF NOT EXISTS vector;
```

### 2 Run the following NPM Commands via NPM RUN ...

dev
next dev --turbo
build
next build
db:generate
drizzle-kit generate
db:studio
drizzle-kit studio
db:migrate
tsx lib/db/migrate.ts
db:seed-authors
tsx lib/db/seed-authors.ts
db:seed-books
tsx lib/db/seed-books.ts
db:seed-thumbhash
tsx lib/db/seed-thumbhash.ts
db:embeddings
tsx lib/ai/create-embeddings.ts

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/templates/next.js/next-book-inventory)
