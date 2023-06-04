const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const tamanhoPalavra = palavras.some((palavra) => {
    return palavra.length > 5;
});
if (tamanhoPalavra) {
    console.log("Existe palavra inválida");
} else {
    console.log("Array validado");
}