console.log("Olá Mundo!!")
let nome 
let idade
console.log(typeof nome)
console.log(typeof idade)
// porque as variaveis não tem um valor atríbuido
let nomeUsuario = prompt ("Qual é o seu nome?")
let idadeUsuario = prompt ("Qual a sua idade?")
console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)
//todas as variaveis sao consideradas strings, ate mesmo os numeros
console.log("Olá",nomeUsuario,"você tem",idadeUsuario,"anos")

let cafe = prompt("Voce já tomou o café da manhã?")
let almoço = prompt("Voce ja almoçou hoje?")
let agua= prompt("Voce ja bebeu água hoje?")
console.log("Voce já tomou o café da manhã?",cafe)
console.log("Voce ja almoçou hoje?",almoço)
console.log("Voce ja bebeu água hoje?",agua)

let a = 10
let b = 25
let c 
c = a
a = b 
a = c
console.log(a,b)

//desafio
let n1 = Number(prompt("Diga um numero:"))
let n2 = Number(prompt("Diga outro numero:"))
let x = n1 + n2
let y = n1*n2
console.log(x)
console.log(y)

let a = true
let b = false
let c = true

console.log(a&&b)
console.log(b&&c)
console.log(a&&c)
console.log(a&&b&&c)





