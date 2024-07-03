class BadRequestException extends Error {
  statusCode = 400;
  message = `Bad request`;
  constructor(error) {
    super();
    if (error && error.message) {
      this.message = error.message;
      if (typeof error.message === 'string') {
        let messageParts = String(error.message).split('. ');
        if (messageParts.length > 1) {
          this.message = messageParts;
        }
      }
    }
  }
}

module.exports = BadRequestException;
