
const colors = {
    red: "\x1b[31m%s\x1b[0m",   // Rojo
    green: "\x1b[32m%s\x1b[0m", // Verde
    blue: "\x1b[34m%s\x1b[0m",  // Azul
    yellow: "\x1b[33m%s\x1b[0m" // Amarillo
}


//funciones para colorear un texto en consola
function colorText(text, color) {
    return colors[color] ? colors[color].replace('%s', text) : text;
}

//funcion para aplicar el efecto ['O','N','D','A'] al texto
function toWaveText(text) {
    return text
        .split("")
        .map((char, index) => (index % 2 == 0 ? char.toUpperCase() : char.toLowerCase()))
        .join("");
}

// Funcion para enmarcar un texto con *
function frameText(text) {
    const length = text.length + 4;
    const border = "*".repeat(length);
    return `${border}\n* ${text} *\n${border}`


}

module.exports = { colorText, toWaveText, frameText };


