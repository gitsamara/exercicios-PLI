function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 10;

    while (tentativas > 0) {
        const palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
        if (palpite === numeroSecreto) {
            console.log("Parabéns! Você acertou!");
            return;
        } else if (palpite > numeroSecreto) {
            console.log("Muito alto!");
        } else {
            console.log("Muito baixo!");
        }
        tentativas--;
        console.log(`Você tem ${tentativas} tentativas restantes.`);
    }
    console.log(`Você perdeu! O número secreto era ${numeroSecreto}`);
}

jogoAdivinhacao();
