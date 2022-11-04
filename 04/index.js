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