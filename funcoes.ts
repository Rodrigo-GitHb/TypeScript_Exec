function multiplica(valor1: number, valor2: number): number{
    const valores = valor1 * valor2

    return valores;
}

const resultado = multiplica(20, 20)
console.log(resultado)

function saudacoes(nome: string): string{
    return `Olá ${nome}`;
}

const usuario = "Rodrigo"
const saudacoesNome = saudacoes(usuario);
console.log(saudacoesNome)