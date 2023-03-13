//Variaveis
var a = 27;
var b = 3;
//declaracoes
function soma(){
    return a +b;
}
function sub(){
    return a - b;
}
function mult(){
    return a*b;
}
function div(){
    return a/b;
}
function pot(){
    return a**b;
}
function rad(){
    return a **(1/b);
    //return Math.sqrt(a)
}

console.log("Resultados: ");
console.log("Soma de",a,"+",b,"=",soma(a,b));
console.log("Subtração de",a,"-",b,"=", sub(a,b));
console.log("Multiplicação de",a,"x",b,"=",mult(a,b));
console.log("Divisão de",a,"/",b,"=",div(a,b));
console.log("Potenciação de",a,"**",b,"=", pot(a,b));
console.log("Raiz",b,"° de",a,"=",rad(a,b));
