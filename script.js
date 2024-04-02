let textInput = document.querySelector("#input");
let outInput = document.querySelector("#output");

function criptografar() {
    let texto = textInput.value;

    let resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "iner").replace(/a/g, "ai").replace(/o/g,"ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = resultCripto;
}

function descriptografar() {
    let texto = textInput.value;

    let resultDescripto = texto.replace(/enter/g,"e").replace(/iner/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");

    document.getElementById('output').innerHTML = resultDescripto; 
}

function copiar() {
    let textoCop = document.querySelector('#output');
    textoCop.select();
    document.execCommand('copy');
    alert("Copiado!");

    
}