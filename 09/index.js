// Filtro de números positivos
// Faça um programa que filtra um array de números inteiros e retorne um novo array apenas com os números positivos.

const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

const resultado = numeros.filter((numero) => {
    return numero > 0;
});
console.log(resultado);