const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

let codigoPostal = 00222444

const resultado = enderecos.find((cep) => {
    return cep.cep === codigoPostal
});
console.log(resultado.rua);
