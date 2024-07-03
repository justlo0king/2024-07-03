const Trades = require('../models/trades');
const { tradesCreateSchema } = require('../models/trades.schema');
const BadRequestException = require('../lib/exceptions/bad-request.exception');

class TradesService {
  async create(body) {
    try {
      body = await tradesCreateSchema.validateAsync(body, {
        abortEarly: false,
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
    return await Trades.create(body);
  }

  async findOne(query) {
    return await Trades.findOne({ where: query });
  }

  async findMany(query) {
    return await Trades.findAll({ where: query });
  }
}

module.exports = TradesService;
