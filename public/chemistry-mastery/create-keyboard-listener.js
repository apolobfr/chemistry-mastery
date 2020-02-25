import Observer from './observer-class.js'

export default function createKeyboardListener() {
    const observer = new Observer()
    let playerId = null

    function RegisterPlayerId(newPlayerId) {
        playerId = newPlayerId
    }

    document.addEventListener('keydown', handleKeyDown)

    function handleKeyDown(event) {
        const keyPressed = event.key
        const command = {
            type: 'move-player',
            playerId,
            keyPressed
        }

        observer.notify(command)
    }

    return {
        observer,
        RegisterPlayerId
    }
}