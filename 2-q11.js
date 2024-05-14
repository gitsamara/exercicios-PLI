let numero = parseInt(prompt("Digite um número positivo:"));

console.log("Números ímpares até " + numero + ":");

for (let i = 0; i <= numero; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
