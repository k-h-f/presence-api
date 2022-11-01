import { Request, Response } from 'express';
import MonitoringController from '../controllers/monitoringController';

export const monitoringHandler = async (req: Request, res: Response) => {
  const { params } = req;

  const serverId = params.serverId;

  const controller = new MonitoringController();
  const monitoring = (await controller.getMonitoring(serverId)).find(
    (record) => record.serverId === serverId
  );
  res.send(monitoring ?? { message: 'Server not found', bots: [] });
};
