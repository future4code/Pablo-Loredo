/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

R:false, false, true, boolean
*/

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

R:Adicionar um Number antes que cada prompt 
O valor do prompt sempre retornara uma string sem o tipo vindo antes do prompt
*/

// exercicios de escrita de codigo 
let idadeUsuario = prompt("Qual a sua idade?")
let idadeBff = prompt ("Qual a idade do seu melhor amigo?")
let comparacaoDeIdades = idadeUsuario > idadeBff 
console.log("Sua idade é maior que a do seu melhor amigo?", comparacaoDeIdades)


let numeroPar = prompt("Insira um numero par")
console.log(numeroPar%2)
// o programa sempre retorna resto 0 
//o programa retona 1

let anosUsuario = prompt("Quantos anos voce tem ?")
let anosUsuarioMeses = anosUsuario * 12
let anosUsuarioDias = anosUsuario * 11 * 30 + (27 * anosUsuario)
// o 27 sao os meses de fevereiro
let anosUsuarioHoras = anosUsuarioDias * 24 
console.log("Voce viveu por",anosUsuarioMeses,"meses")
console.log("Voce viveu por",anosUsuarioDias,"dias")
console.log("Voce viveu por",anosUsuarioHoras,"horas")

let n1 = prompt("Diga um numero")
let n2 = prompt("Diga outro numero")
let divisao1 = n1 / n2
let divisao2 = n2 / n1
console.log("O primeiro numero e maior que o segundo?",n1>n2)
console.log("O primeiro numero e igual ao segundo?",n1 == n2)
console.log("O primeiro numero e divisivel pelo segundo?",divisao1 >= n1/n2)
console.log("O segundo numero e divisivel pelo primeiro?",divisao2 >= n2/n1)
