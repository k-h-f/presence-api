import { Request, Response } from 'express';
import UpdateController from '../controllers/updateController';

export const updateChannelHandler = async (req: Request, res: Response) => {
  const controller = new UpdateController();
  const {
    params: { serverId },
    body: { channelId }
  } = req;

  const response = await controller.postUpdateChannel(
    parseInt(serverId),
    channelId
  );
  res.send(response);
};

export const updateBotsHandler = async (req: Request, res: Response) => {
  const controller = new UpdateController();
  const {
    params: { serverId },
    body: { channelId }
  } = req;
  controller.postUpdateBots(parseInt(serverId), channelId);
  res.send(200);
};

export const updateHandler = async (req: Request, res: Response) => {
  const controller = new UpdateController();
  const {
    params: { serverId },
    body: { channelId, bots }
  } = req;
  controller.postUpdate(parseInt(serverId), channelId, bots);
  res.send(200);
};
