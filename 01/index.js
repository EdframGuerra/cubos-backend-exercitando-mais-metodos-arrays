// aça um sistema que possa auxiliar funcionários a localizar em que posição da estante da biblioteca está um determinado livro. 
// Sendo assim, o sistema deve receber o nome do livro e informar a sua posição na estante.

const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const posicaoNaEstante = livros.findIndex((livro) => {
    return livro === nomeDoLivro;
});

console.log(`O livro está na posição ${posicaoNaEstante}`);