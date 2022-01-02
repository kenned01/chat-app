function join(payload, socket, io, users = [], fn) {
  let { channel,  username} = payload


  socket.join(channel)
  users.push({
    ...payload,
    id: socket.id
  })

  fn({status: "ok"})

  io.sockets.in(channel).emit(
    'users status', 
    users.filter(elm => elm.channel === channel)
  )
}

module.exports = join