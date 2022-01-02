function messageNotify(payload, socket, io, users = []) {


  let {room_id, message} = payload

  io.sockets.in(room_id).emit('chat message', {
    sender: socket.id,
    message: message
  })
}

module.exports = messageNotify