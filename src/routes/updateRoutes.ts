import { Router } from 'express';
import { updateChannelHandler } from '../../handlers/updateRouteHandlers';
import { validateUpdateChannel } from '../validations/updateRouteValidations';

const updateRouter = Router({ mergeParams: true });

updateRouter.post('/channel', validateUpdateChannel, updateChannelHandler);

export default updateRouter;
