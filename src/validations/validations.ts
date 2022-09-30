import Joi from 'joi';

export const validateServerId = Joi.object({
  serverId: Joi.number().valid().required()
});

export const validateChannelUpdateBody = Joi.object({
  channelId: Joi.number().valid().required()
});

export const validateBotsBody = Joi.object({
  bots: Joi.array().items(Joi.string().required()).required()
});

export const validateUpdateBotsBody = Joi.object({
  bots: Joi.array().items(Joi.string().required()).required(),
  channelId: Joi.number().valid().required()
});
