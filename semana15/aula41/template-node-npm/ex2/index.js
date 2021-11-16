 const operacao = process.argv[2]
switch (operacao){
    case "add": 
    console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
     break;
     case "sub": 
    console.log(parseInt(process.argv[3]) - parseInt(process.argv[4]));
     break;
     case "mult": 
    console.log(parseInt(process.argv[3]) *  parseInt(process.argv[4]));
     break;
     case "div": 
     console.log(parseInt(process.argv[3]) / parseInt(process.argv[4]));
   break;
     default:("Desculpa, não entendi.")
 }