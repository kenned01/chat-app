function users (req, res, users) {
	let room = req.params.room
  	res.json(users.filter(elm => elm.channel === room))
}

module.exports = users