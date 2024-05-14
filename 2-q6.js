let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

if (num1 % num2 === 0 || num2 % num1 === 0) {
    console.log("Pelo menos um dos números é múltiplo do outro.");
} else {
    console.log("Nenhum dos números é múltiplo do outro.");
}
