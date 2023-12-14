alert ("Insira dois números e veja qual é o maior")
let num1 = parseInt (prompt ("Por favor, insira o primeiro número"));
let num2 = parseInt(prompt ("Por favor, insira o segundo número"));


function numero (num1, num2){   

    const num1Maior = alert (`O número ${num1} é maior que ${num2}`);
    const num2Maior = alert (`O número ${num2} é maior que ${num1}`);
    const numIgual = alert (`São os mesmos valores!!`);
    
    if (num1 > num2) {
        return num1Maior;
    }else if (num2 > num1){
        return num2Maior;
    } else if (num1 == num2) {
        return numIgual;
    }
    
}

numero (num1, num2);