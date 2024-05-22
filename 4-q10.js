function solicitarNumeros() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    return [num1, num2];
}

function calcularMedia(num1, num2) {
    return (num1 + num2) / 2;
}

function exibirResultado(media) {
    console.log(`A média é ${media}`);
}

const [numero1, numero2] = solicitarNumeros();
const media = calcularMedia(numero1, numero2);
exibirResultado(media);
