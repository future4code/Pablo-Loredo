/*let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

a. undefined
b. null
c. 11
d. 3
e. 13 19 5 6 7 8 9 10 11 12 13
f. 9
*/

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
R:SUBA NUM ONIBUS EM MIRROCOS 27
*/
 
// ----------Exercicios de escrita de código----------


let userName = prompt("Qual o seu Nome?")
let userEmail = prompt ("Qual o seu email?")

console.log(`O e-mail ${userEmail.trim()} foi cadastrado com sucesso!
Seja bem vinda(O) ${userName.trim()}!`)
//------------------------------------------
let comidasFavoritas =["Lasanha","Batata frita", "costela com batata e agriao","pizza","churrasco"]
console.log(`Essas sao minhas comidas favoritas:  
${comidasFavoritas}`)
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
// ------------------------------------------

let pergunta = prompt("Qual a sua comida favorita?")
comidasFavoritas[1] = pergunta
console.log(comidasFavoritas)

let listaDeTarefas = []
let userTasks1 = prompt("Me diga uma tarefa que voce realiza durante seus dias ?")
const userTasks2 = prompt("Me diga mais uma tarefa")
const usertasks3 =prompt ("Me diga uma terceira tarefa")
listaDeTarefas.push(userTasks1)
listaDeTarefas.push(userTasks2)
listaDeTarefas.push(userTasks2)
console.log(listaDeTarefas)

let indice = prompt("Diga o indice de uma tarefa que voce realizou 0, 1 ou 2") 
 
listaDeTarefas.splice(Number(indice),1)
console.log(listaDeTarefas)