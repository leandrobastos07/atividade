//calculadora simples com as 5 operações básicas:
//adição,subtração,multiplicação,divisão e divisão com sobra;
let num1;
let num2;
let resultado;

function sobra() {
    num1 = Number(window.prompt("digite o primeiro número: "));
    num2 = Number(window.prompt("digite o primeiro número: "));

    resultado = num1 % num2;
    numero = resultado % 2;

    alert("O resultado é " + resultado + ".");
        if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
}
function multiplicacao(){
    num1 = Number(window.prompt("digite o primeiro número: "));
    num2 = Number(window.prompt("digite o primeiro número: "));

         resultado = num1 * num2;
         numero = resultado % 2;
        
         alert("O resultado é " + resultado + ".");
             if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
}

function divisao(){
    num1 = Number(window.prompt("digite o primeiro número: "));
    num2 = Number(window.prompt("digite o primeiro número: "));

    resultado = num1 / num2;
    numero = resultado % 2;

    alert("O resultado é " + resultado + ".");
        if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
}

function adicao(){
    num1 = Number(window.prompt("digite o primeiro número: "));
    num2 = Number(window.prompt("digite o primeiro número: "));

    resultado = num1 + num2;
    numero = resultado % 2;

    alert("O resultado é " + resultado + ".");
        if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
}

function subtracao(){
    num1 = Number(window.prompt("digite o primeiro número: "));
    num2 = Number(window.prompt("digite o primeiro número: "));

    resultado = num1 - num2;
      numero = resultado % 2;

    alert("O resultado é " + resultado + ".");
    if (numero == 0) {
        alert ("Par");
    }else {
        alert ("impar")
    }    
        
}


