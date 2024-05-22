function solicitarValor() {
    return parseFloat(prompt("Digite o valor em Reais:"));
}

function converterParaDolar(valorReais) {
    const taxaDeCambio = 0.20; // Exemplo de taxa de câmbio
    return valorReais * taxaDeCambio;
}

function exibirResultado(valorDolar) {
    console.log(`O valor em Dólares é $${valorDolar.toFixed(2)}`);
}

const valorReais = solicitarValor();
const valorDolar = converterParaDolar(valorReais);
exibirResultado(valorDolar);
