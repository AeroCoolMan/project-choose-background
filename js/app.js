const button = document.getElementById('btn')
const color = document.querySelector('.color1')
const hex = [
    '0','1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F'
]

const colors = ['#222222', 'blue', 'green']

button.addEventListener('click', colorChange)

function colorChange() {
    let hexColor = hexGenerate()
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
}

function hexGenerate() {
    let hexSymbolAndColor = '#'
    for(let i = 0; i < 6; i++){
        hexSymbolAndColor += hex[randomColors()]
    }

    return hexSymbolAndColor
}

function randomColors() {
    return Math.floor(Math.random() * hex.length)
}