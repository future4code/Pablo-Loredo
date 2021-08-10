function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas1 = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas1;
}
//# sourceMappingURL=ex2.js.map