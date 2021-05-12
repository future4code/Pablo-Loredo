// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo(altura,largura) {
  altura = prompt("Diga a altura do objeto")
  largura = prompt("Diga a largura do objeto")
  const area = altura * largura
  console.log(area)
  return (area)

} 

//Exercício 2

function imprimeIdade(anoDoNascimento,anoAtual) {
   anoDoNascimento = prompt("Em que ano estamos?") 
   anoAtual = prompt("Qual a sua idade?")
   const idade = anoDoNascimento - anoAtual
   console.log(idade)
   return(idade)

}

//Exercício 3

function calculaIMC(peso, altura) {
   const IMC = peso / (altura * altura)
   console.log(IMC)
   return(IMC)

}

//Exercício 4

function imprimeInformacoesUsuario(nome,idade,email) {
   nome = prompt ("Qual o seu nome?")
   idade = prompt ("Qual sua idade?")
   email = prompt ("Me diga seu email")
   const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`
   console.log(frase)
   return(frase)

}

//Exercício 5

function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
   cor1 = prompt ("Me diga sua cor favorita")
   cor2 = prompt ("Me diga sua cor favorita")
   cor3 = prompt ("Me diga sua cor favorita")
   let coresFavoritas = []
   coresFavoritas.push(cor1,cor2,cor3)
   console.log(coresFavoritas)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   const caixaAlta = string.toUpperCase()
   console.log(caixaAlta)
   return(caixaAlta)
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   const resultado = custo / valorIngresso
   console.log(resultado)
   return (resultado)

}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  const checaString = string1.length === string2.length
  console.log(checaString)
  return(checaString)
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   console.log(array[0])
   return(array[0])
}

// Exercício 10

function retornaUltimoElemento(array) {
   let ultimo = array[array.length - 1]
   console.log(ultimo)
   return(ultimo)
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   let ultimo = array[array.length - 1]
   let primeiro = array[0]
   array[0] = ultimo
   array[array.length - 1] = primeiro
return (array)
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const diferença = string1.length === string2.length
  return(diferença)
}

// Exercício 13

function checaRenovacaoRG(ano,anoDoNascimento,anoRg) {
  const renovaCinco = (ano - anoDoNascimento) <= 20 && (ano - anoRg) >=5
  const renovaDez = (ano - anoDoNascimento) <= 50 && (ano - anoRg) >=10
  const renovaQuinze = (ano - anoDoNascimento) >= 50 && (ano - anoRg) >=15 
  const renova = renovaCinco && renovaDez && renovaQuinze
console.log(renova)
return(renova)

}

// Exercício 14

function checaAnoBissexto(ano) {
    const anoBissexto = ano/400 <= ano
    console.log(anoBissexto)
    return (anoBissexto)

}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
}