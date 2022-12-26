import express from 'express';
import { logger } from './config/loggerConfig';
import { backupRoute, characterRoute } from './src/routes/indexRoutes';
// import { mongoConnect } from './db/mongodb/baseDB';
const app = express();
app.use(express.json());
app.use(characterRoute);
app.use(backupRoute);

app.listen(3000, () => {
  // mongoConnect();
  logger.info('Server started on port 3000');
});
