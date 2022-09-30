import { NextFunction, Request, Response } from 'express';
import { validateBotsBody, validateServerId } from './validations';

export const validateCreateRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params, body } = req;
  const bodyValidationResult = validateBotsBody.validate(body);
  const paramsValidationResult = validateServerId.validate(params);

  if (paramsValidationResult.error || bodyValidationResult.error) {
    const message =
      paramsValidationResult.error?.message ||
      bodyValidationResult.error?.message;
    res.status(400).send(`Validation Error: ${message}`);
  } else {
    next();
  }
};
