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

R:a, b, c 11,d 3 4 5 6 7 8 9 10 11 12 13, 0
*/

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
R:subi num onibus em marrocos 26
*/
 
let userName = prompt("Qual o seu Nome?")
let userEmail = prompt ("Qual o seu email?")

console.log(`O e-mail ${userEmail.trim()} foi cadastrado com sucesso!
Seja bem vinda(O) ${userName.trim()}!`)

let ComidasFavoritas =["Lasanha",
"Batata frita", 
"costela com batata e agriao",
"pizza",
"churrasco"]
console.log(`Essas sao minhas comidas favoritas:  
ComidasFavoritas`,
ComidasFavoritas)
let pergunta = prompt("Qual a sua comida favorita?")
let userFood = pergunta.replaceAll(pergunta,"batata frita")


let listaDeTarefas = ["",""]
let userTasks = prompt("Me diga tres tarefas que voce realiza durante seus dias ?")
let indice = prompt("Diga o indice de uma tarefa que voce realizou 0, 1 ou 2") 
userTasks.splice(indice,userTasks)

console.log(userTasks)
