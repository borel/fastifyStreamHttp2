
const Fastify = require('fastify');
const fs = require('fs')
const path = require('path')

const getKeySomehow = () => {
 return fs.readFileSync(path.join(__dirname, './resources/localhost.key'));
}

const getCertSomehow = () => {
 return fs.readFileSync(path.join(__dirname, './resources/localhost.crt'));
}
// https is necessary otherwise browsers will not
// be able to connect
const fastify = Fastify({
 http2: true,
 https: {
   key: getKeySomehow(),
   cert: getCertSomehow()
 }
});

fastify.get('/fastify', async (request, reply) => {
 return 'Hello World!';
});

fastify.listen(3000);