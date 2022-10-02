import { Request, Response } from 'express';
import BotsController from '../controllers/botsController';

export const botsRouteHandler = async (req: Request, res: Response) => {
  const {
    params: { serverId }
  } = req;
  const controller = new BotsController();

  const botsResponse = await controller.getBots(parseInt(serverId));

  res.send({
    bots: botsResponse
  });
};
