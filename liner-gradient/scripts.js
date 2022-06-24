function generateColor() {
    let color1 = generateColor_code();
    let color2 = generateColor_code();
    let elem = document.body;

    elem.style.background = `linear-gradient(to right,${color1},${color2})`

    let div = document.getElementById('ins')
    let rem = document.getElementById('remove')
    if (rem) {
        rem.remove()
    }
    div.insertAdjacentHTML('afterBegin', `<h2 id = 'remove' class="blink">linear-gradient(to right, ${color1}, ${color2})</h2?`)
}

// Generates random color 
function generateColor_code() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}