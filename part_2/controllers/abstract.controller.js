const {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
  HTTP_STATUS_NOT_FOUND,
  MESSAGE_BAD_REQUEST,
  MESSAGE_INTERNAL_SERVER_ERROR,
  MESSAGE_NOT_FOUND,
} = require('../lib/constants');

class AbstractController {
  handleError(error, { res }) {
    if (error.statusCode === HTTP_STATUS_BAD_REQUEST) {
      res.status(HTTP_STATUS_BAD_REQUEST);
      return res.send(error.message || MESSAGE_BAD_REQUEST);
    } else if (error.statusCode === HTTP_STATUS_NOT_FOUND) {
      res.status(error.statusCode);
      return res.send(error.message || MESSAGE_NOT_FOUND);
    } else {
      console.error(`uncaught exception:`, error);
      res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR);
      return res.send(MESSAGE_INTERNAL_SERVER_ERROR);
    }
  }
}

module.exports = AbstractController;
