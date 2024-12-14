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

1. npm run dev
   next dev --turbo
2. npm run build
   next build
3. npm run db:generate
   drizzle-kit generate
4. npm run db:studio
   drizzle-kit studio
5. npm run db:migrate
   tsx lib/db/migrate.ts
6. npm run db:seed-authors
   tsx lib/db/seed-authors.ts
7. npm run db:seed-books
   tsx lib/db/seed-books.ts
8. npm run db:seed-thumbhash
   tsx lib/db/seed-thumbhash.ts
9. npm run db:embeddings
   tsx lib/ai/create-embeddings.ts
