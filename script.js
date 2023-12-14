
alert ("Insira dois números e veja qual é o maior")
let num1 = prompt ("Por favor, insira o primeiro número");
let num2 = prompt ("Por favor, insira o segundo número");

function compararNum (num1, num2){
    
    
    if(num1 > num2) {
        return alert (`O número ${num1} é maior que ${num2}`);
    }else if (num2 > num1){
        return alert (`O número ${num2} é maior que ${num1}`);
    }else if (num1 == num2) {
        return alert ("São os mesmos valores!!");
    }
    
}

compararNum (num1, num2);