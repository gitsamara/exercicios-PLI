let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));

let maior = num1;

if (num2 > maior) {
    maior = num2;
}

if (num3 > maior) {
    maior = num3;
}

console.log("O maior número é: " + maior);
