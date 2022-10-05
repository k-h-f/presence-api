import { Router } from 'express';
import { updateHandler } from '../handlers/updateRouteHandlers';
// import {
//   updateBotsHandler,
//   updateChannelHandler
// } from '../handlers/updateRouteHandlers';
// import {
//   validateUpdateBots,
//   validateUpdateChannel
// } from '../validations/updateRouteValidations';
import { validateUpdate } from '../validations/updateRouteValidations';

import { validateMainBody } from '../validations/validations';

const updateRouter = Router({ mergeParams: true });

updateRouter.post('/', validateUpdate, updateHandler);
// updateRouter.post('/channel', validateUpdateChannel, updateChannelHandler);
// updateRouter.post('/bots', validateUpdateBots, updateBotsHandler);

export default updateRouter;
