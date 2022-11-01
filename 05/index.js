// Filtro e validação de usuários
// Com base no array de objetos abaixo filtre os usuários que possuam entre 18 e 65 anos, 
// depois faça uma validação que verifica se todos possuem habilitação. 
// Se o resultado da validação for false imprima todos precisam estar habilitados, 
// senão, todos passaram no teste.
// Dica: utilize o método filter() e every()

const usuarios = [
    { nome: "André", idade: 29, habilitado: false },
    { nome: "Marcos", idade: 70, habilitado: true },
    { nome: "Ana", idade: 35, habilitado: true },
    { nome: "Vinícius", idade: 44, habilitado: true },
    { nome: "Carlos", idade: 17, habilitado: false },
    { nome: "Maria", idade: 19, habilitado: true }
];

const validacaoUsuarios = (arrayObjeto) => {
    const resultado = arrayObjeto.filter((usuario) => {
        return usuario.idade > 18;
    });

    const ehHabilitado = resultado.every((item) => {
        return item.habilitado
    });

    if (!ehHabilitado) {
        console.log("Todos passaram no teste");
    } else {

        console.log("Todos precisam estar habilitados");
    }
    console.log(resultado)
};

validacaoUsuarios(usuarios);