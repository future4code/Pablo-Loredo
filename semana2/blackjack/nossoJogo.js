/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//------------------- Exercicio 1 --------------------//

window.alert("Bem vindo ao BlackJack!")
console.log("Bem vindo ao BlackJack!")
if (confirm("Deseja jogar?")){
console.log("Nova rodada"),blackJack()
} else{
console.log("O jogo acabou")
}

function blackJack (){  
 let userCards = comprarCarta()
 let cpuCards = comprarCarta()

console.log(`Essas são suas cartas ${userCards.texto} ${userCards.valor}`)
console.log(`Cartas do computador ${cpuCards.texto} ${cpuCards.valor}`)

if (userCards.valor > cpuCards.valor){
   console.log("Você venceu!")
} else if(userCards.valor === cpuCards.valor) {
   console.log("Empate!")
}else if(userCards.valor < cpuCards.valor){
   console.log("Você perdeu!")
}
}


