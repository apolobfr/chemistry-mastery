export default function renderScreen(canvas, game, playerId) {
    const context = canvas.getContext('2d')
    const screen = game.state.screen
    const tileSize = canvas.size / screen.tilesAmmount

    context.clearRect(0, 0, canvas.size, canvas.size)
    
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
    context.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize)

    context.fillStyle = 'white'

    for (const elementId in game.state.elements) {
        const element = game.state.elements[elementId]
        context.textAlign = 'center'
        context.font = "25px monospace"
        context.fillText(element.symbol, element.x * tileSize + 25, element.y * tileSize + 40)
        context.font = "10px monospace"
        context.fillText(element.atomicNumber, element.x * tileSize + 15, element.y * tileSize + 15)
    }

    requestAnimationFrame(() => {
        renderScreen(canvas, game, playerId)
    })
}