// const countries = require("./countries")
// //console.log(countries)

// //utilizando o precess.argv

// //a)
// const hello = (nome,idade) =>{
//  return console.log(`Olá, ${nome}! Você tem ${idade}`)
// }

// hello("pablo", 19)


// //b)
// const futureHello = (nome,idade) =>{
//     const novaIdade = idade + 7
//     return console.log(`Olá, ${nome}! Você tem ${idade}. Em sete anos você terá ${novaIdade}`)
// }
// futureHello("pablo", 19)

// //2)
// const operacao = process.argv[2]
// switch (operacao){
//     case "add": 
//     console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
//     break;
//     case "sub": 
//     console.log(parseInt(process.argv[3]) - parseInt(process.argv[4]));
//     break;
//     case "mult": 
//     console.log(parseInt(process.argv[3]) *  parseInt(process.argv[4]));
//     break;
//     case "div": 
//     console.log(parseInt(process.argv[3]) / parseInt(process.argv[4]));
//     break;
//     default:("Desculpa, não entendi.")
// }


// //3) 

// const adicionaTarefa = () =>{
//     const tarefaAdicionada = process.argv[2]
//     const listaDeTarefas ={
//         tarefas:["Lavar a louça",`${tarefaAdicionada}`]
//     }
//     return console.log(`Tarefa adicionada com sucesso ${listaDeTarefas.tarefas}`)
    
// }
// adicionaTarefa()



