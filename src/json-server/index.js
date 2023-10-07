/* eslint-disable */
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 80);
	});
	next();
});

server.get('/charts', (_, res) => {
	try {
		const db = JSON.parse(
			fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
		);
		const { charts = [] } = db;

		return res.status(200).json(charts);
	} catch (e) {
		return res.status(500).json({ message: e.message });
	}
});


server.use(router);

server.listen(8000, () => {
	console.log('server is running on 8000 port');
});
