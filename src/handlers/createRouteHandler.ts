import { Request, Response } from 'express';
import UpdateController from '../../controllers/updateController';

export const createHandler = async (req: Request, res: Response) => {
  res.send('Hello');
};
