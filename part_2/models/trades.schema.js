const Joi = require('joi');

const tradesCreateSchema = Joi.object({
  type: Joi.string().valid('buy', 'sell').required(),
  symbol: Joi.string().required(),
  price: Joi.number().required(),
  shares: Joi.number().min(1).max(100).required(),
  user_id: Joi.number().required(),
  timestamp: Joi.number().required(),
});

module.exports = {
  tradesCreateSchema,
};
