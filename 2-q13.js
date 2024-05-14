const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

console.log("Bem-vindo ao jogo de adivinhação!");
console.log("Tente adivinhar o número secreto entre 1 e 100.");

while (tentativas > 0) {
    let palpite = parseInt(prompt("Digite seu palpite:"));

    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou o número secreto.");
        break;
    } else if (palpite < numeroSecreto) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }

    tentativas--;
}

if (tentativas === 0) {
    console.log("Suas tentativas acabaram. O número secreto era: " + numeroSecreto);
}
