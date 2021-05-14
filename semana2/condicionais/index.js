//----------Exercicios de interpretaçao de codigo-----------

/*1 
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.") 
  
  verifica se o numero do usuario e divisivel por 2
  numeros divisiveis por 2 
  numeros que nao sao divisiveis por 2
  */

 //-----//-----//

 /* 2
  let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
// BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) 

 indicar o preço de uma fruta
O preço da fruta maça e 2.25 
O preço da fruta pera e 5
*/

//-----//-----//

/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) 

pedindo um numero ao usuario
Esse numero passou no teste, erro
Sim, pois a variavel mensagem esta dentro do escopo da condicinal
*/

//----------Exercicios de escrita de codigo----------//

const podeDirgir = () => {
const idade = Number(prompt("Qual a sua idade?"))
if (idade >=18 ){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
    return
}
}
podeDirgir()

//---------//--------//

const verificaTurno = () =>{
const turno = prompt("Em que turno voce estuda?(Responda com M - Matutino,V - Vespertino, N - Noturno)")
if (turno === "M"){
    console.log("Bom Dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if(turno === "N"){
    console.log("Boa Noite!")
}
}
verificaTurno()
//---------//---------//

const verificaTurnoSwitch = (turno) => {
const perguntaTurno = prompt(turno)
    switch(perguntaTurno){
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Boa tarde!")
            break;
        case "N":
            console.log("Boa Noite!")
            break;
            default:
                console.log("Turno não Encontrado")
                break
    }   
return
}
verificaTurnoSwitch("Em que turno voce estuda?(Responda com M - Matutino,V - Vespertino, N - Noturno)")

//----------//----------//

const cinema = (preco,genero) => {
    preco = prompt("Quanto voce pode pagar?")
    
    genero = prompt("Qual genero de filme voce gosta?")
    if (preco <= 15 && genero.toLowerCase() === "fantasia"){
        console.log("Bom filme!")
    } else{
        console.log("Escolha outro filme :(")
    }
}
cinema()

