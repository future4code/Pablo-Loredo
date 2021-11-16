const adicionaTarefa = () =>{
    const tarefaAdicionada = process.argv[2]
    const listaDeTarefas ={
        tarefas:["Lavar a louça",`${tarefaAdicionada}`]
    }
    return console.log(`Tarefa adicionada com sucesso ${listaDeTarefas.tarefas}`)
    
}
adicionaTarefa()