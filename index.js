
const Fastify = require('fastify');
const fs = require('fs')
const path = require('path')

const getKey = () => {
 return fs.readFileSync(path.join(__dirname, './resources/localhost.key'));
}

const getCert= () => {
 return fs.readFileSync(path.join(__dirname, './resources/localhost.crt'));
}


const fastify = Fastify({
 http2: true,
 https: {
   key: getKey(),
   cert: getCert()
 }
});

fastify.get('/fastify', async (request, reply) => {
 return 'Hello World!';
});

fastify.listen(3000);