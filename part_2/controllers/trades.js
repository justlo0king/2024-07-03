const { HTTP_STATUS_CREATED } = require('../lib/constants');
const NotFoundException = require('../lib/exceptions/not-found.exception');

const TradesService = require('../services/trades.service');
const AbstractController = require('./abstract.controller');

class TradesController extends AbstractController {
  tradesService;

  constructor() {
    super();
    this.tradesService = new TradesService();
  }

  async create(req, res) {
    try {
      const result = await this.tradesService.create(req.body);
      res.status(HTTP_STATUS_CREATED);
      return res.send(result);
    } catch (error) {
      return this.handleError(error, { res });
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params || {};
      const result = await this.tradesService.findOne({ id });
      if (!result?.id) {
        throw new NotFoundException(`ID not found`);
      }
      return res.send(result);
    } catch (error) {
      return this.handleError(error, { res });
    }
  }

  async findMany(req, res) {
    try {
      const query = {};
      if (req.query.user_id) query.user_id = req.query.user_id;
      if (req.query.type) query.type = req.query.type;
      const result = await this.tradesService.findMany(query);
      return res.send(result);
    } catch (error) {
      return this.handleError(error, { res });
    }
  }
}

module.exports = TradesController;
