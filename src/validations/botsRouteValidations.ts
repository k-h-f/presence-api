import { NextFunction, Request, Response } from 'express';
import { validateServerId } from './validations';

export const validateBotsRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params } = req;
  const serverIdValidationResult = validateServerId.validate(params);

  if (serverIdValidationResult.error) {
    res
      .status(400)
      .send(`Validation Error: ${serverIdValidationResult.error.message}`);
  } else {
    next();
  }
};
