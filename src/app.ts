import express from 'express';
import updateRoutes from './routes/updateRoutes';

import * as dotenv from 'dotenv';
dotenv.config();
import { getConfig } from './config/getConfig';

import createRoutes from './routes/createRoutes';
import deleteRouter from './routes/deleteRoutes';

const { PORT } = getConfig();

export const app = express();

app.use(express.json());

app.use('/update/:serverId', updateRoutes);
app.use('/delete/:serverId', deleteRouter);
app.use('/create/:serverId', createRoutes);

export const server = app.listen(PORT, () =>
  console.log(`App up on port ${PORT}`)
);
