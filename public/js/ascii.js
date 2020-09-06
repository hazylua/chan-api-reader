// var chars = ['#', '%', '&', '=', '+', '/', '-']
let chars = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']

window.setInterval(() => {
    asciiCharacters()
}, 100)

function asciiCharacters() {
    documentChar = document.getElementsByName("animated_ascii")[0].innerText
    documentCharIndex = chars.indexOf(documentChar)
    document.getElementsByName("animated_ascii").forEach(h1 => {
        if (documentCharIndex != chars.length - 1)
            h1.innerText = chars[documentCharIndex + 1]
        else
            h1.innerText = chars[0]
    })
}