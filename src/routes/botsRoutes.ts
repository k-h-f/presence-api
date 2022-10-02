import { Router } from 'express';
import { botsRouteHandler } from '../handlers/botsRouteHandler';
import { validateBotsRoute } from '../validations/botsRouteValidations';

const botsRouter = Router({ mergeParams: true });

botsRouter.get('/', validateBotsRoute, botsRouteHandler);

export default botsRouter;
