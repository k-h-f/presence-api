import { Router } from 'express';

const defaultRouter = Router();

defaultRouter.get('/healthcheck', (_req, res) => res.send('UP'));

export default defaultRouter;
