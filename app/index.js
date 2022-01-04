const paths = require('path');

function index (_, res) {

	let parent = paths.resolve(__dirname, '../')
	res.sendFile( paths.join(parent, 'build', 'index.html'))
}

module.exports = index;