import { NextFunction, Request, Response } from 'express';
import { validateServerId } from './validations';

export const validateMonitoring = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params } = req;

  const serverIdValidationResult = validateServerId.validate(params);

  if (serverIdValidationResult.error) {
    res.status(400).send(`Validation Error: ${serverIdValidationResult.error}`);
  } else {
    next();
  }
};
