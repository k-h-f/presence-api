import { NextFunction, Request, Response } from 'express';
import { validateBotsBody, validateServerId } from './validations';

export const validateDeleteBots = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params, body } = req;
  const serverIdValidationResult = validateServerId.validate(params);
  const deleteBotsValidationResult = validateBotsBody.validate(body);

  if (serverIdValidationResult.error || deleteBotsValidationResult.error) {
    const message =
      serverIdValidationResult.error?.message ||
      deleteBotsValidationResult.error?.message;

    res.status(400).send(`Validation Error: ${message}`);
  } else {
    next();
  }
};
