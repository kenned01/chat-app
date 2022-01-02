const express = require('express')
const cors = require('cors');
const path = require('path');
const { createServer } = require('http')
const { Server } = require('socket.io')
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

const { options } = require('./settings/socketOptions');
const join = require('./src/socket_join');
const messageNotify = require('./src/socket_message');
const disconnect = require('./src/socket_disconnect');
const { CACHE_OPTIONS } = require('./cache');

//
const indexView = require('./app/index.js')
const usersView = require('./app/users.js')

//initialization
const app = express()
const httpServer = createServer(app)
const liveReloadServer = livereload.createServer()

const io = new Server(httpServer, options)
const users = []

app.use(connectLiveReload());
app.use(cors());

app.use(express.static("build", CACHE_OPTIONS ));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/', indexView)
app.get('/chat', indexView)

app.get('/users/:room', (req, res) => usersView(req, res, users))


io
.on('connection', (socket) => {

  console.log('connecting')

  socket.on("join", (payload, fn) => join(payload, socket, io, users, fn))

  socket.on('chat message', payload => messageNotify(payload, socket, io, users))

  socket.on("disconnect", () => disconnect(socket, io, users))

})

liveReloadServer.server.once("connection", () => {
  setTimeout(() => liveReloadServer.refresh("/"), 100)
})

httpServer.listen(8000, () => {
  console.log("listening on http://localhost:8000")
})