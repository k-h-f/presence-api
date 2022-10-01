import { Router } from 'express';
import { deleteBotsHandler } from '../handlers/deleteRouteHandler';
import { validateDeleteBots } from '../validations/deleteRouteValidations';

const deleteRouter = Router({ mergeParams: true });

deleteRouter.post('/bots', validateDeleteBots, deleteBotsHandler);

export default deleteRouter;
