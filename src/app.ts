import express from 'express';
import updateRoutes from './routes/updateRoutes';
import monitoringRoutes from './routes/monitoringRoutes';

import * as dotenv from 'dotenv';
dotenv.config();
import { getConfig } from './config/getConfig';
import defaultRoutes from './routes/defaultRoutes';

const { PORT } = getConfig();

export const app = express();

app.use(express.json());

app.use('/', defaultRoutes);
app.use('/update/:serverId', updateRoutes);
app.use('/monitoring/:serverId', monitoringRoutes);

export const server = app.listen(PORT, () =>
  console.log(`App up on port ${PORT}`)
);
