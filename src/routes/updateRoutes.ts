import { Router } from 'express';
import { updateHandler } from '../handlers/updateRouteHandlers';
import { validateUpdate } from '../validations/updateRouteValidations';

const updateRouter = Router({ mergeParams: true });

updateRouter.post('/', validateUpdate, updateHandler);

export default updateRouter;
