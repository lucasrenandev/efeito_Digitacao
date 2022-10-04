const paragraph = document.querySelector("#text")
const text = paragraph.innerHTML.split("")

function typingEffect(elemento) {

    elemento.innerHTML = ""
    for(let i = 0; i < text.length; i++) {
        setTimeout(function() {
            elemento.innerHTML += text[i]
        }, 75 * i)
    }
}

typingEffect(paragraph)