import { config } from 'dotenv';
config();

import express from 'express';
import dbRoutes from './routes/db';

async function bootstrap() {
  const app = express();
  const PORT = process.env.PORT;

  app.use('/api/db', dbRoutes)

  try {
    app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
  } catch(err) {
    console.log(err)
  }
}

bootstrap();
