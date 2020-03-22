import Observer from './observer-class.js'
import createPeriodicTable from './create-periodic-table.js'

export default function createRoom(state) {

    const periodicTable = createPeriodicTable()

    const observer = new Observer

    function addPlayer(command) {
        const playerId = command.playerId
        const playerX = 'playerX' in command ? command.playerX : Math.floor(Math.random() * state.screen.tilesAmmount)
        const playerY = 'playerY' in command ? command.playerY : Math.floor(Math.random() * state.screen.tilesAmmount)

        state.players[playerId] = {
            x: playerX,
            y: playerY
        }

        observer.notify({
            type: 'add-player',
            playerId,
            playerX,
            playerY
        })
    }

    function removePlayer(command) {
        const playerId = command.playerId
        delete state.players[playerId]

        observer.notify({
            type: 'remove-player',
            playerId: playerId
        })
    }

    function addElement(command) {
        const elementId = 'elementId' in command ? command.elementId : Math.floor(Math.random() * 10000000)
        const elementX = 'elementX' in command ? command.elementX : Math.floor(Math.random() * state.screen.tilesAmmount)
        const elementY = 'elementY' in command ? command.elementY : Math.floor(Math.random() * state.screen.tilesAmmount)
        const atomicNumber = 'atomicNumber' in command ? command.atomicNumber : Math.floor(Math.random() * (periodicTable.elements.length)) + 1
        state.elements[elementId] = {
            x: elementX,
            y: elementY,
            atomicNumber: atomicNumber,
            ...periodicTable.elements[atomicNumber - 1],
            ...periodicTable.types[periodicTable.elements[atomicNumber - 1].type]
        }
    }

    function removeElement(command) {
        const elementId = command.elementId
        delete state.elements[elementId]
    }

    function setState(newState) {
        Object.assign(state, newState)
    }

    function movePlayer(command) {
        observer.notify(command)
        const playerId = command.playerId
        const keyPressed = command.keyPressed
        const player = state.players[playerId]

        const acceptedMoves = {
            ArrowUp(player) {
                if (player.y - 1 >= 0) {
                    player.y = player.y - 1
                }
                else {
                    player.y = state.screen.tilesAmmount - 1
                }
            },
            ArrowRight(player) {
                if (player.x + 1 < state.screen.tilesAmmount) {
                    player.x = player.x + 1
                }
                else {
                    player.x = 0
                }
            },
            ArrowDown(player) {
                if (player.y + 1 < state.screen.tilesAmmount) {
                    player.y = player.y + 1
                }
                else {
                    player.y = 0
                }
            },
            ArrowLeft(player) {
                if (player.x - 1 >= 0) {
                    player.x = player.x - 1
                }
                else {
                    player.x = state.screen.tilesAmmount - 1
                }
            }
        }

        if (acceptedMoves[keyPressed] && player) {
            acceptedMoves[keyPressed](player)
            checkElementColision(playerId)
        }

        function checkElementColision(playerId) {
            const player = state.players[playerId]
            for (const elementId in state.elements) {
                const element = state.elements[elementId]

                if (element.x == player.x && element.y == player.y) {
                    removeElement({ elementId })
                }
            }
        }
    }

    return {
        state,
        observer,
        periodicTable,
        setState,
        addPlayer,
        removePlayer,
        movePlayer,
        addElement,
        removeElement
    }
}