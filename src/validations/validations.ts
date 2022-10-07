import Joi from 'joi';

export const validateServerId = Joi.object({
  serverId: Joi.number().valid().required().unsafe()
});

export const validateUpdateBody = Joi.object({
  bots: Joi.array().items(Joi.string().required()).optional(),
  channelId: Joi.number().valid().optional()
});
