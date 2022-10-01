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
