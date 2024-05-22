function solicitarAlturaEPeso() {
    const altura = parseFloat(prompt("Digite sua altura em metros:"));
    const peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
    return { altura, peso };
}

function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

function exibirResultadoIMC(imc) {
    console.log(`Seu IMC é ${imc.toFixed(2)}`);
    if (imc < 18.5) {
        console.log("Você está abaixo do peso.");
    } else if (imc < 24.9) {
        console.log("Você está com peso normal.");
    } else if (imc < 29.9) {
        console.log("Você está com sobrepeso.");
    } else {
        console.log("Você está obeso.");
    }
}

const { altura, peso } = solicitarAlturaEPeso();
const imc = calcularIMC(altura, peso);
exibirResultadoIMC(imc);
