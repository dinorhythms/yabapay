/**
 *  Send response message
 *
 * @param {object} res - response object
 * @param {number} status - http status code
 * @param {string} statusMessage - http status message
 * @param {object} data - response data
 *
 * @returns {object} returns response
 *
 * @example
 *
 *    response(res, 404, 'error', { message: 'not found'})
*/
const successResponse = (res, status, statusMessage, data) => res.status(status).json({
  status: statusMessage,
  data,
});

/**
 *  Send error response message
 *
 * @param {object} res - response object
 * @param {number} status - http status code
 * @param {string} statusMessage - http status message
 * @param {object} data - response data
 *
 * @returns {object} returns response
 *
 * @example
 *
 *    response(res, 404, 'error', { message: 'not found'})
*/
const errorResponse = (res, status, statusMessage, error) => res.status(status).json({
  status: statusMessage,
  error,
});

module.exports = { successResponse, errorResponse };
