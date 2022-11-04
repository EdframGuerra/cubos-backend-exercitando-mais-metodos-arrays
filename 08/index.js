// Modificando um array
// Faça um programa que, a partir de um array, cria um novo array com os mesmos elementos mas que todos os elementos
//  comecem com letras maiúsculas e em cada elemento seja adicionado o número do índice correspondente.

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArray = frutas.map((fruta, index) => {
    const primeiraLetra = fruta[0].toUpperCase();
    const restoDaPalavra = fruta.slice(1).toLowerCase();

    return `${index} - ${primeiraLetra}${restoDaPalavra}`
});


console.log(novoArray);