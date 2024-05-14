let escolha = prompt("Escolha um prato do menu (opções: pizza, hambúrguer, salada, macarrão):");

switch (escolha) {
    case 'pizza':
        console.log("Pizza - Preço: R$20,00 - Descrição: Deliciosa pizza de diversos sabores.");
        break;
    case 'hambúrguer':
        console.log("Hambúrguer - Preço: R$15,00 - Descrição: Suculento hambúrguer com acompanhamentos.");
        break;
    case 'salada':
        console.log("Salada - Preço: R$10,00 - Descrição: Refrescante salada com vegetais frescos.");
        break;
    case 'macarrão':
        console.log("Macarrão - Preço: R$18,00 - Descrição: Massa saborosa com molho especial.");
        break;
    default:
        console.log("Opção inválida.");
}
