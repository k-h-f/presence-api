import { Router } from 'express';
import { updateChannelHandler } from '../handlers/updateRouteHandlers';
import {
  validateUpdateBots,
  validateUpdateChannel
} from '../validations/updateRouteValidations';

const updateRouter = Router({ mergeParams: true });

updateRouter.post('/channel', validateUpdateChannel, updateChannelHandler);
updateRouter.post('/bots', validateUpdateBots, updateChannelHandler);

export default updateRouter;
