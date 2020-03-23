import express from 'express'
import http from 'http'
import socketio from 'socket.io'
import createGame from './public/chemistry-mastery/create-game.js'

const port = 3000
const app = express()
const server = http.createServer(app)
const socket = socketio(server)

const defaultState = {
  players: {},
  elements: {},
  screen: {
    tilesAmmount: 12
  }
}

app.use(express.static('public'))

const game = createGame()
game.setState(defaultState)

game.observer.subscribe(command => {
  socket.emit(command.type, command)
  console.log(game.state)
})

socket.on('connection', socket => {
  const playerId = socket.id
  console.log(`Player connected on Server with id: ${playerId}`)

  game.addPlayer({ playerId })

  socket.emit('setup', { state: game.state })

  socket.on('disconnect', () => {
    game.removePlayer({ playerId })
  })

  socket.on('move-player', command => {
    if (command.playerId == playerId) {
      game.movePlayer(command)
    }
  })
})

server.listen(port, () => {
  console.log('> Server is listening on port', port)
})
