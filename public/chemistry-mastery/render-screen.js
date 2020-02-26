export default function renderScreen(canvas, game, playerId) {
    let screen = canvas.game
    let context = screen.getContext('2d')
    const tileSize = canvas.size / canvas.tileAmmount
    context.clearRect(0, 0, screen.height, screen.width)
    
    for (const playerId in game.state.players) {
        const player = game.state.players[playerId]
        context.fillStyle =  '#C0C0C0'
        context.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize)
    }

    for (const elementId in game.state.elements) {
        const element = game.state.elements[elementId]
        context.fillStyle = element.color;
        context.fillRect(element.x * tileSize, element.y * tileSize, tileSize, tileSize)
    }

    const player = game.state.players[playerId]
    context.fillStyle = 'black'
    context.fillRect(player.x* tileSize, player.y* tileSize, tileSize, tileSize)

    context.fillStyle = 'white'

    for (const elementId in game.state.elements) {
        const element = game.state.elements[elementId]
        context.textAlign = 'center'
        context.font = "25px monospace"
        context.fillText(element.symbol, element.x * screen.width / 10 + 25, element.y * screen.height / 10 + 40)
        context.font = "10px monospace"
        context.fillText(element.atomicNumber, element.x * screen.width / 10 + 15, element.y * screen.height / 10 + 15)
    }

    requestAnimationFrame(() => {
        renderScreen(canvas, game, playerId)
    })
}