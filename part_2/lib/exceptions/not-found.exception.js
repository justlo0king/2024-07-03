class NotFoundException extends Error {
  statusCode = 404;
  message = `Not found`;
  constructor(message) {
    super();
    this.message = message;
  }
}

module.exports = NotFoundException;
