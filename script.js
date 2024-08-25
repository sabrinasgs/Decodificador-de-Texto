const textArea = document.querySelector(".textarea");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncripitado = encriptar(textArea.value);
    mensagem.value = textoEncripitado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.table(matrizCodigo);
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringdesencriptada) {
    let matrizCodigo = [["e" , "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.table(matrizCodigo);
    stringdesencriptada = stringdesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringdesencriptada.includes(matrizCodigo[i][1])) {
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringdesencriptada;
}

function copiar() {
    const copiarTexto = document.querySelector('.mensagem').value;
    navigator.clipboard.writeText(copiarTexto);
    mensagem.value = ''
}