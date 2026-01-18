class CustomError extends Error {
  constructor(message, statusCode) {
    const status = String(statusCode).startsWith('4') ? 'fail' : 'error';

    super(message);
    this.statusCode = statusCode;
    this.status = status;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
