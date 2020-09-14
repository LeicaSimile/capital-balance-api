async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {return 'hi'});
}

module.exports = routes;
