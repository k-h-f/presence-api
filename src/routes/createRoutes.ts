import { Router } from 'express';
import { createHandler } from '../handlers/createRouteHandler';
import { validateCreateRoute } from '../validations/createRouteValidations';

const createRouter = Router({ mergeParams: true });

createRouter.post('/', validateCreateRoute, createHandler);

export default createRouter;
