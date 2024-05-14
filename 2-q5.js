let escolha = prompt("Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para converter de Fahrenheit para Celsius:");
let temperatura;

if (escolha === 'C') {
    temperatura = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (temperatura * 9 / 5) + 32;
    console.log("Temperatura em Fahrenheit: " + fahrenheit);
} else if (escolha === 'F') {
    temperatura = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (temperatura - 32) * 5 / 9;
    console.log("Temperatura em Celsius: " + celsius);
} else {
    console.log("Escolha inválida.");
}
