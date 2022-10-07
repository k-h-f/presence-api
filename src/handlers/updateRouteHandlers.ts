import { Request, Response } from 'express';
import UpdateController from '../controllers/updateController';

export const updateHandler = async (req: Request, res: Response) => {
  const controller = new UpdateController();
  const {
    params: { serverId },
    body: {
      body: { channelId, bots }
    }
  } = req;

  controller.postUpdate(serverId, channelId, bots);
  res.send(200);
};
