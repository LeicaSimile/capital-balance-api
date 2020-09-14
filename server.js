const fastify = require('fastify')({ logger: true });
const routesV1 = require('./api/routes/api-v1');

const config = require('./config.json');
const env = process.env.NODE_ENV || 'dev';
global.config = config[env];

fastify.register(routesV1);

async function start() {
  try {
    await fastify.listen(global.config.port || 3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();
