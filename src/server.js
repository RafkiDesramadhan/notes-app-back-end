const Hapi = require('hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost':'172.31.31.42',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();