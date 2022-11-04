const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const vendaProibda = palavras.some((palavra) => {
    return palavra === "cerveja" || palavra === "vodka";
});
if (vendaProibda) {
    console.log("Revise sua lista, João.\nPossui bebida com venda proibida!");
} else {
    console.log("Tudo certo, vamos as compras!");
}