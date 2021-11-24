//a)
const hello = (nome,idade) =>{
 return console.log(`Olá, ${nome}! Você tem ${idade}`)
}

hello("pablo", 19)


//b)
const futureHello = (nome,idade) =>{
    const novaIdade = idade + 7
    return console.log(`Olá, ${nome}! Você tem ${idade}. Em sete anos você terá ${novaIdade}`)
 }
futureHello("pablo", 19)