import express from 'express';
import updateRoutes from './routes/updateRoutes';
import * as dotenv from 'dotenv';
dotenv.config();
import { getConfig } from './config/getConfig';
import createRoutes from './routes/createRoutes';

const { PORT } = getConfig();

const app = express();

app.use(express.json());

app.use('/update/:serverId', updateRoutes);
app.use('/create/:serverId', createRoutes);

app.listen(PORT, () => console.log(`App up on port ${PORT}`));
