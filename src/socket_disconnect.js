function disconnect(socket, io, users = []) {

  //emmit function
  //delete from users
  let  index = users.findIndex(elm => elm.id === socket.id)

  if(index === -1) {
    return null;
  }


  let  user  = users[index]

  users.splice(index, 1)

  io.sockets.in(user.channel).emit(
    'users status', 
    users.filter(elm => elm.channel === user.channel)
  )

}

module.exports = disconnect