const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('./env');

const swaggerDefinition = {
  openapi: '3.0.1',
  info: {
    title: 'YabaPay API documentation',
    version: '1.0.0',
    description: 'YabaPay auto generated swagger documentation',
    contact: {
      email: 'larrysnet2001@gmail.com'
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ['src/routes/api/*.js', 'src/routes/*.js'],
};

const specs = swaggerJsDoc(options);

module.exports = (router) => {
  router.get('/docs', swaggerUi.setup(specs));
};
