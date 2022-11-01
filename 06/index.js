// Filtro de caracteres
// Faça um programa que percorra um array com nomes de cidades e retorne um novo array somente com nomes 
// que contenham até 8 caracteres.

const cidades = ["Salvador", "São Paulo", "Brasilia", "Recife", "Rio de Janeiro"];

const filtroCaracteres = cidades.filter((cidade) => {
    const tamanhoPalavra = cidade.length;
    return tamanhoPalavra <= 8;
});


console.log(filtroCaracteres.join(", "));



// Extra

// Formate o novo array de forma que, para o exemplo acima, seja impresso:

// Salvador, Brasilia, Recife