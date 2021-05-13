
//-----------Exercicios de interpretção de codigo---------//

/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) 
  
  Os objetos, o index de cada objeto e a array original
  */

  //-------------------- Ex 2 ---------------------//

  /* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) 
  O nome de todos os objetos dentro do array
  */

  //------------------- Ex 3 -------------------//

  /* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC) 
  
  Todos os apelidos diferentes de "Chijo"
  */

  //--------- Exercicios de Escrita de Codigo ----------//

//-------------------- Ex 1 --------------------//
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
//---------- Letra A ----------//

 const nomeCachorrinhos = pets.map((nome) => {
     return nome.nome
 })
 console.log(nomeCachorrinhos)

// --------- Letra B ----------//

 const salsicha = pets.filter((raca) => {
     return raca.raca === "Salsicha"
 })
 console.log(salsicha)

//---------- Letra C ----------//

 const enviaMensagem = pets.filter((raca) => {
     return raca.raca === "Poodle"
 }).map((raca) => {
     return raca.nome
 })
 console.log(`Você ganhou um cupom de desconto de 5% para tosar o ${enviaMensagem[0]}`)
 console.log(`Você ganhou um cupom de desconto de 5% para tosar o ${enviaMensagem[1]}`)

 //--------------------- Ex 2 -------------------//

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
// ----------- Letra A ----------//
 const retornaNome = produtos.map((nome) => {
     return nome.nome
 })
 console.log(retornaNome)
// ----------- Letra B ----------//

const criaObjeto = produtos.filter((nome) => {
     return nome.nome
}).map((preco) => {
return preco.preco * 0.95.toFixed(2)
})
console.log(criaObjeto)
const criaObjeto2 = produtos.map((nome) => {
     return nome.nome
})

const objeto = criaObjeto2 + criaObjeto
console.log(objeto)

//---------- Letra C ----------//
const retornBebida = produtos.filter((nome) => {
     return nome.categoria === "Bebidas"
})
console.log(retornBebida)

//----------- Letra D ----------//

const yPe = produtos.filter((nome) => {
     return nome.nome.includes("Ypê")
})

console.log(yPe)

//----------- Letra E ----------//

const compra = produtos.filter((nome) => {
     return nome.nome.includes("Ypê")
}).map((nome) => {
    return ` Compre ${nome.nome} por ${nome.preco}`
})

console.log(compra)
