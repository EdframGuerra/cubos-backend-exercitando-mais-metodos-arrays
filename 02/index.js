// Verificando limite de caracters
// Dado um determinado array de palavras, faça um programa que verifica se existe ao menos uma palavra com mais de 5 caracteres. 
// Caso exista, o programa deverá imprimir existe palavra inválida, senão, o programa deverá imprimir array validado.

const palavras = ["livro", "caneta", "sol", "carro", "orelha"]



const tamanhoPalavra = palavras.every((palavra) => {
    return palavra.length > 5;
});
if (tamanhoPalavra) {
    console.log("Existe palavra inválida");
} else {
    console.log("Array validado");
}

