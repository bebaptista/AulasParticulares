const app = require('./src/app');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const port = process.env.PORT || 3000;

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});