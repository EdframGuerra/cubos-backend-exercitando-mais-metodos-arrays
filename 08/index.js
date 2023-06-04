const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArray = frutas.map((fruta, index) => {
    const primeiraLetra = fruta[0].toUpperCase();
    const restoDaPalavra = fruta.slice(1).toLowerCase();

    return `${index} - ${primeiraLetra}${restoDaPalavra}`
});


console.log(novoArray);