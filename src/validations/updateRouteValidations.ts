import { NextFunction, Request, Response } from 'express';
import { validateServerId, validateUpdateBody } from './validations';

export const validateUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params, body } = req;

  const serverIdValidationResult = validateServerId.validate(params);
  const validationResult = validateUpdateBody.validate(body);

  if (serverIdValidationResult.error || validationResult.error) {
    const message =
      serverIdValidationResult.error?.message ||
      validationResult.error?.message;
    res.status(400).send(`Validation Error: ${message}`);
  } else {
    next();
  }
};
