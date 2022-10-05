import { Router } from 'express';
import { monitoringHandler } from '../handlers/monitoringHandler';
import { validateMonitoring } from '../validations/monitoringValidations';

const monitoringRouter = Router({ mergeParams: true });
monitoringRouter.post('/', validateMonitoring, monitoringHandler);

export default monitoringRouter;
