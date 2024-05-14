let numero = parseInt(prompt("Digite um número positivo:"));
let contador = 0;

console.log("Números pares até " + numero + ":");

while (contador <= numero) {
    if (contador % 2 === 0) {
        console.log(contador);
    }
    contador++;
}
