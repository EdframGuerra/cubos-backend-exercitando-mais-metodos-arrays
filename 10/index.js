// Filtro de números pares
// Faça um programa que filtra um array de números inteiros e retorne um novo array apenas com os números pares.

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const resultado = numeros.filter((numero) => {
    return numero % 2 == 0;
});
console.log(resultado);