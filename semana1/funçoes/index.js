
// -----Exercicios--de--interpretaçao--de--codigo------
// 1)
//function minhaFuncao(variavel) {
//	return variavel * 5
//}
//
//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))
//
// a) 10,50
// b) o mesmo resultado


//2)
//let textoDoUsuario = prompt("Insira um texto");
///
//const outraFuncao = function(texto) {
//	return texto.toLowerCase().includes("cenoura")
//}
//
//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta)
//
// a)retorna a palavar cenouro no texto do usuario em lowerCase, caso haja a palavra cenoura 
// b1)eu gosto de cenoura
// b2)cenoura e bom pra vista
// b3)cenouras crescem na terra

// -----Exercicios--de--escrita--de--codigo-----
function imprimeNome(){
    console.log("Me chamo Pablo,tenho 18 anos, moro no Rio de janeiro e sou estudante")   
}
imprimeNome()
const imprimeNome2 = (nome,idade,endereço,profissao) =>{
    console.log(`Eu sou ${nome},tenho ${idade} anos,moro em ${endereço} e sou ${profissao}`)
}
 imprimeNome2("pablo",18,"santa cruz","estudante")
//

//----------Exercicio--2----------

//a)
const imprimeNumeros = (n1,n2) =>{
 let soma = n1 + n2
 console.log(soma)
 return
}
imprimeNumeros(5,10)

//b)
const informaNumero = (n1,n2) =>{
 let boolean = n1>n2
 console.log(boolean)
 return
}
informaNumero(5,10)

//c)
const parOuImpar = (n1,n2) =>{
const verifica = n1 % n2 !== 0
console.log(verifica)
return verifica
}
parOuImpar(4,2)
parOuImpar(3,2)

//d)
const letraMaior =(mensagem) =>{
console.log(mensagem.toUpperCase())
console.log(mensagem.length)
return 
}
letraMaior("Estou com saudades")
//----------Exercicio 3----------
const operaçoesDeCalculo =(valorUsuario,valorUsuario2) =>{
     const soma = valorUsuario + valorUsuario2
    const subtracao = valorUsuario - valorUsuario2
   const multiplicacao = valorUsuario * valorUsuario2 
    const divisao = valorUsuario / valorUsuario2
 console.log(`Numeros inseridos ${valorUsuario} e ${valorUsuario2}`)
console.log(`Soma ${soma}`)
console.log(`Diferença ${subtracao}`)
console.log(`Multilicaçao ${multiplicacao}`)
console.log(`Divisao ${divisao}`)
}
operaçoesDeCalculo(5,10)



