import express from 'express';
import updateRoutes from './routes/updateRoutes';

import * as dotenv from 'dotenv';
dotenv.config();
import { getConfig } from './config/getConfig';

import createRoutes from './routes/createRoutes';
import deleteRoutes from './routes/deleteRoutes';
import botsRoutes from './routes/botsRoutes';
import monitoringRoutes from './routes/monitoringRoutes';

const { PORT } = getConfig();

export const app = express();

app.use(express.json());

app.use('/update/:serverId', updateRoutes);
app.use('/delete/:serverId', deleteRoutes);
app.use('/create/:serverId', createRoutes);
app.use('/bots/:serverId', botsRoutes);

app.use('/monitoring/:serverId', monitoringRoutes);

export const server = app.listen(PORT, () =>
  console.log(`App up on port ${PORT}`)
);
