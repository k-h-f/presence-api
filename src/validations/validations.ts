import Joi from 'joi';

export const validateServerId = Joi.object({
  serverId: Joi.number().valid().required().unsafe()
});

export const validateUpdateBody = Joi.object({
  body: {
    bots: Joi.array().items(Joi.string()).optional(),
    channelId: Joi.number().valid().optional().unsafe()
  }
});
