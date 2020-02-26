export default function createCanvas(command) {
    const gameDiv = document.getElementById(command.divId)
    const canvas = document.createElement('canvas');
    gameDiv.appendChild(canvas);
    canvas.size = 600
    canvas.height = canvas.size
    canvas.width = canvas.size
    canvas.id = command.canvasId
    return canvas
}