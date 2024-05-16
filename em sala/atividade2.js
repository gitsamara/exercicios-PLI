function mensagem(nome,idade){
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    
    if (idade > 14 && idade < 18) {
        document.getElementById("res").innerHTML = `Olá ${nome}, sua idade é ${idade} e você pertence a categoria adolescente.`;
    }
    else if (idade > 18 && idade < 60) {
        document.getElementById("res").innerHTML = `Olá ${nome}, sua idade é ${idade} e você pertence a categoria adulto.`;
    }
    else {
        document.getElementById("res").innerHTML = `Olá ${nome}, você não se encaixa na amostra dessa atividade.`;
    }

    /*
    const mensagem = (nome, idade) => {
        let idadeUsuario = parseInt(document.getElementById(idade).value);
        const categoria = idadeUsuario < 18 ? 'adolecente' : idadeUsuario < 60 ? 'adulto' : idoso;
        document.getElementById("res").innerHTML = `Olá ${document.getElementById(nome).value}, sua idade é ${idadeUsuario} e vc pertence a categoria ${categoria}.`
    }
     */
}