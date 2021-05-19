function calculaPrecoTotal(quantidade) {
let precoMacaNormal = 1.30
let precomaca12= 1.00
if(quantidade >= 12){
  return quantidade * precomaca12
}else if(quantidade < 12){
 return quantidade * precoMacaNormal
}
  
}