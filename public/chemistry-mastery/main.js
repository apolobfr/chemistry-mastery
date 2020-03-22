import renderScreen from './render-screen.js'
import createGame from './create-game.js'
import createKeyboardListener from './create-keyboard-listener.js'
import createCanvas from './create-canvas.js'

window.addEventListener('load', () => {
    const socket = io()

    socket.on('connect', () => {
        const playerId = socket.id
        console.log(`Player connected on Client with id: ${playerId}`)
    })

    socket.on('setup', (state) => {

        const canvas = createCanvas({ divId: 'game_mount', canvasId: 'game_canvas' })

        const playerId = socket.id
        const game = createGame(state)
        const keyboardListener = createKeyboardListener()
        
        game.setState(state)

        keyboardListener.RegisterPlayerId(playerId)

        keyboardListener.observer.subscribe(game.movePlayer)
        keyboardListener.observer.subscribe((command) => {
            socket.emit(command.type, command)
        })

        renderScreen(canvas, game, playerId)

        socket.on('add-player', (command) => {
            game.addPlayer(command)
        })

        socket.on('remove-player', (command) => {
            game.removePlayer(command)
        })

        socket.on('move-player', (command) => {
            const playerId = socket.id
            if (playerId != command.playerId) {
                game.movePlayer(command)
            }
        })
    })
})