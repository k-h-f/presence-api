import { NextFunction, Request, Response } from 'express';
import { validateMainBody, validateServerId } from './validations';

export const validateMonitoring = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params, body } = req;

  console.log('body!!!', body);

  const serverIdValidationResult = validateServerId.validate(params);
  const bodyValidationResult = validateMainBody.validate(body);

  if (serverIdValidationResult.error || bodyValidationResult.error) {
    const message =
      serverIdValidationResult.error?.message ||
      bodyValidationResult.error?.message;
    res.status(400).send(`Validation Error: ${message}`);
  } else {
    next();
  }
};
