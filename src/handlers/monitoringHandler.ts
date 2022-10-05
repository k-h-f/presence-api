import { Request, Response } from 'express';
import MonitoringController from '../controllers/monitoringController';

export const monitoringHandler = (req: Request, res: Response) => {
  const {
    params: { serverId },
    body: { channelId, bots }
  } = req;

  const controller = new MonitoringController();
  controller.update(parseInt(serverId), channelId, bots);
};
