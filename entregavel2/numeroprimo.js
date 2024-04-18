function ehPrimo(number) {
  if (number <= 1) {
    return false;
  }
  
  for(let i=2;i<=Math.sqrt(number);i++) {
      if(number%i===0) {
        return false;
      }
  }
  return true; 
}

var x = parseInt(prompt("Indique o número"));
var resultado = ehPrimo(x);

if(resultado){
    document.write("O número é primo");
} else {
    document.write("O número não é primo");
}

