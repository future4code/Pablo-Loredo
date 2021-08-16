//const minhaString : string = 18
//retorna erro por estar com a tipagem errada

const meuNumero : number = 18;
meuNumero.toString();

type pessoa = {
    nome: string,
    idade:number,
    corFavorita:string
}

enum arcoIris {
 verde="verde",
 azul="azul",
 roxo="roxo",
 rosa="rosa",
 vermelho="vermelho",
 amarelo="amarelo"
}

const pessoa1 : pessoa = {
    nome:"Pablo",
    idade:18,
    corFavorita:arcoIris.verde
}

const pessoa2 : pessoa = {
    nome:"Dandhara",
    idade:16,
    corFavorita:arcoIris.azul
}

const pessoa3 : pessoa = {
    nome:"Layane",
    idade:18,
    corFavorita:arcoIris.roxo
}

