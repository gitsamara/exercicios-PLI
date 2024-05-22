let variavelGlobal = "Sou global";

function testarEscopo() {
    let variavelLocal = "Sou local";
    console.log(variavelGlobal); 
    console.log(variavelLocal); 
}

testarEscopo();
console.log(variavelGlobal); 
