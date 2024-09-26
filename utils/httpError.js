class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Specific BadRequest Error
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message, 400);  // 400 Bad Request
  }
}

// Export the error classes
module.exports = {
  CustomAPIError,
  BadRequestError,
};
