const cidades = ["Salvador", "São Paulo", "Brasilia", "Recife", "Rio de Janeiro"];

const filtroCaracteres = cidades.filter((cidade) => {
    const tamanhoPalavra = cidade.length;
    return tamanhoPalavra <= 8;
});


console.log(filtroCaracteres);

let arrayFormatado = filtroCaracteres.join(", ");
console.log(arrayFormatado);