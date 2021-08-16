function obterEstatisticas(numeros:any) {
    
    const numerosOrdenados : any = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma : number  = 0

    for (let num of numeros) {
        soma += num
    }
    type estatisticas ={
        maior:any,
        menor:any,
        media:number
    }
    const estatisticas1 : estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas1
}
