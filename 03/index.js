// Validando lista de compras
// A mãe do João deu uma lista de compras para ele ir até o mercado e comprar os itens da lista. 
// Chegando no mercado, João leu um aviso que informava a proibição da venda de dois tipos de bebidas alcoolicas naquele horário: 
// cerveja e vodka. Sendo assim, João precisa verificar se em sua lista possui alguma das duas bebidas.

// Faça um programa que use a função some() para validar essa lista de compras e caso encontre alguma das duas bebidas
//  imprima revise sua lista, joão. possui bebida com venda proibida!, caso contrário, imprima tudo certo, vamos as compras!.

const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const vendaProibda = palavras.some((palavra) => {
    return palavra === "cerveja" || palavra === "vodka";
});
if (vendaProibda) {
    console.log("Revise sua lista, João.\nPossui bebida com venda proibida!");
} else {
    console.log("Tudo certo, vamos as compras!");
}