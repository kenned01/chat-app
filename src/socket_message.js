function messageNotify(payload, socket, io, users = []) {


  let {room_id} = payload

  io.sockets.in(room_id).emit('chat message', {
    sender: socket.id,
    ...payload
  })
}

module.exports = messageNotify