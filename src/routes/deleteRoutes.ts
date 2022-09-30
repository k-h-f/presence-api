import { Router } from 'express';
import { deleteBotsHandler } from '../handlers/deleteRouteHandler';
import { validateDeleteBots } from '../validations/deleteRouteValidations';

const deleteRouter = Router();

deleteRouter.post('/bot', validateDeleteBots, deleteBotsHandler);

export default deleteRouter;
