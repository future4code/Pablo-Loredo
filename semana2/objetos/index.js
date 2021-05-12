/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) 

Matheus Nachterguele
Virginia Cavendish
Canal Brasil 19hrs 
*/

//----------//----------//-----------//-------//-----------

 /* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) 
 */
/* nome:Juca
idade:3
raca:SRD
//---//---//
nome: Juba
idade:3 
raca:SRD
//---//---//
nome:Jubo 
idade:3
raca:SRD */ 
//---//---//
//Copia as informaçoes do objeto citado



//----------//----------//--------//--------//

/* 
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
  
False, undefined
*/


let pessoa ={
    nome:"Pablo",
    apelido:["Loredo","Abacaxi","Pinneapple"]

}

let pessoa2 = {
    ...pessoa,
    apelido:["Loredao","Lored0","L0r4d40"]

}
function imprimePessoa(object){
    console.log(`Ola me chamo ${object.nome}, mas pode me chamar de ${object.apelido}`)
    return

}
imprimePessoa(pessoa)
imprimePessoa(pessoa2)

//---------//----------//

const objeto1 ={
   nome:"Pablo",
   idade:18,
   profissao:"Ajudante",
}
 const objeto2 ={
 ...objeto1
 }
 function retornaValor(object1) {
     console.log(object1.nome,object1.nome.length,object1.idade,object1.profissao,object1.profissao.length)
 }

retornaValor(objeto1)
//---------//--------//

let carrinho = []

const laranja ={
    nome:"Laranja",
    disponibilidade: true
}

const maca ={
    nome:"Maca",
    disponibilidade:true
}

const banana={
    nome:"Banana",
    disponibilidade:true
}

const verificaDisponibilidade =(fruta1,fruta2,fruta3) =>{
    carrinho.push(fruta1,fruta2,fruta3)
return
}

verificaDisponibilidade(laranja,banana,maca)
console.log(carrinho)












