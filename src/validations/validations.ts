import Joi from 'joi';

export const validateServerId = Joi.object({
  serverId: Joi.number().valid().required()
});

export const validateChannelUpdateBody = Joi.object({
  channelId: Joi.number().valid().required()
});

export const validateCreateBody = Joi.object({
  bots: Joi.array().items(Joi.string().required()).required()
});
