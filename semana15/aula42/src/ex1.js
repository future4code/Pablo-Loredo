const meuNumero = 18;
meuNumero.toString();
var arcoIris;
(function (arcoIris) {
    arcoIris["verde"] = "verde";
    arcoIris["azul"] = "azul";
    arcoIris["roxo"] = "roxo";
    arcoIris["rosa"] = "rosa";
    arcoIris["vermelho"] = "vermelho";
    arcoIris["amarelo"] = "amarelo";
})(arcoIris || (arcoIris = {}));
const pessoa1 = {
    nome: "Pablo",
    idade: 18,
    corFavorita: arcoIris.verde
};
const pessoa2 = {
    nome: "Dandhara",
    idade: 16,
    corFavorita: arcoIris.azul
};
const pessoa3 = {
    nome: "Layane",
    idade: 18,
    corFavorita: arcoIris.roxo
};
//# sourceMappingURL=ex1.js.map