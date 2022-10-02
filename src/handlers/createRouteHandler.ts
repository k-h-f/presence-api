import { Request, Response } from 'express';

export const createHandler = async (req: Request, res: Response) => {
  res.send('Monitoring started');
};
