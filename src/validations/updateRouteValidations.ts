import { NextFunction, Request, Response } from 'express';
import { validateChannelUpdateBody, validateServerId } from './validations';

export const validateUpdateChannel = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params, body } = req;

  const serverIdValidationResult = validateServerId.validate(params);
  const channelUpdateBodyValidationResult =
    validateChannelUpdateBody.validate(body);

  if (
    serverIdValidationResult.error ||
    channelUpdateBodyValidationResult.error
  ) {
    const message =
      serverIdValidationResult.error?.message ||
      channelUpdateBodyValidationResult.error?.message;
    res.status(400).send(`Validation Error: ${message}`);
  } else {
    next();
  }
};
