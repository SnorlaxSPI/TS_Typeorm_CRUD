import express from 'express';
import { AppDataSource } from './data-source';

import { router } from './routes/routes';

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  
  app.use(router);
  
  return app.listen(process.env.PORT, () => {
    console.log("🚀🚀 Server Started!!");
  })
});
