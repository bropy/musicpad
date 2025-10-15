import { defineConfig } from 'drizzle-kit'
import { envServer } from './src/config/env'

export default defineConfig({
  schema: './src/app/entites/db/schemas/*.schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: envServer.DATABASE_URL,
  },
})

