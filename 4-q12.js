const adicionar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

function calcular() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const operacao = prompt("Digite a operação (+, -, *, /):");

    let resultado;
    switch (operacao) {
        case '+':
            resultado = adicionar(num1, num2);
            break;
        case '-':
            resultado = subtrair(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            console.log("Operação inválida");
            return;
    }

    console.log(`O resultado é ${resultado}`);
}

calcular();
