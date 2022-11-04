// Validação de numeros pares
// Dado o array numérico abaixo, faça um programa que consiga validar se todos os números são pares. 
// Se todos os itens do array forem par, o programa deverá imprimir array válido, senão array inválido.

// Dica: utilize o método every()

const numeros = [0, 122, 4, 6, 7, 8, 44]


// const validacaoNumerosPares = (arrayNumeros) => {
const resultado = numeros.every((number) => {
    return number % 2 == 0;
});
if (resultado) {
    console.log("Array válido")
} else {
    console.log("Array inválido")
}
// }
// validacaoNumerosPares(numeros)