import { config } from 'dotenv';
config();

import express from 'express';
import dbRoutes from './routes/db';
import { errorHandler } from './utils/errorHandler';

async function bootstrap() {
  const app = express();
  const PORT = process.env.PORT;

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  app.use('/api/db', dbRoutes);
  app.use(errorHandler);

  try {
    app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
  } catch(err) {
    console.log(err)
  }
}

bootstrap();
