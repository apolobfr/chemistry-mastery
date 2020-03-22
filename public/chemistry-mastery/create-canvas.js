export default function createCanvas(command) {
    const gameDiv = document.getElementById(command.divId)
    if (!gameDiv) {
        console.error('"game_mout" id was not found, canvas not generated.')
        return
    }
    const canvas = document.createElement("canvas")
    gameDiv.appendChild(canvas)
    canvas.style.background = "snow"
    canvas.size = gameDiv.offsetHeight
    canvas.height = canvas.size
    canvas.width = canvas.size
    canvas.id = command.canvasId
    return canvas
}
