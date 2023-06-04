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
        return usuario.idade > 17 && usuario.idade < 66;
    });

    const ehHabilitado = resultado.every((item) => {
        return item.habilitado
    });

    if (ehHabilitado) {
        console.log("Todos passaram no teste");
    } else {

        console.log("Todos precisam estar habilitados");
    };

};

validacaoUsuarios(usuarios);