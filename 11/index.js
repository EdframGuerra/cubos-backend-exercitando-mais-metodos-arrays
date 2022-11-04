// Filtro de nome por letra
// Faça um programa que filtra um array de strings e retorne um novo array apenas com aqueles que 
// começam com a letra "a", maiúscula ou minúscula.

const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const resultado = nomes.filter((nome) => {
    return nome[0] === "a" || nome[0] === "A"
});

console.log(resultado);