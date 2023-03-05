const ApplicationError = require('./ApplicationError');

class UserNotAutorizationError extends ApplicationError{
  constructor (message) {
    super(message || 'the user is not authorized. Please login', 405);
  }
}

module.exports = UserNotAutorizationError;
