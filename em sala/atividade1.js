function somar() {
    /*
    var num1 = window.document.getElementById('n1')
    var num2 = window.document.querySelector('#n2')
    var result = window.document.getElementById('res')
    var numero1 = Number(num1.value)
    var numero2 = Number(num2.value)
    var r = numero1 + numero2

    result.innerHTML = `A soma de ${numero1} + ${numero2} = ${r}`;
    */

    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    
    var resultado = n1 + n2;
    
    document.getElementById("res").innerHTML = "Resultado: " + resultado;
    
}
