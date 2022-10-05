import Joi from 'joi';

export const validateServerId = Joi.object({
  serverId: Joi.number().valid().required().unsafe()
});

export const validateChannelUpdateBody = Joi.object({
  channelId: Joi.number().valid().required()
});

export const validateBotsBody = Joi.object({
  bots: Joi.array().items(Joi.string().required()).required()
});

export const validateMainBody = Joi.object({
  bots: Joi.array().items(Joi.string().required()).optional(),
  channelId: Joi.number().valid().optional()
});
