alert ("Insira dois números e veja qual é o maior")
let num1 = prompt ("Por favor, insira o primeiro número");
let num2 = prompt ("Por favor, insira o segundo número");

function compararNum (num1, num2){
   
    if(num1 > num2) {
        return `O número ${num1} é maior que ${num2}`;
    }
    
    if (num2 > num1){
        return `O número ${num2} é maior que ${num1}`;
    }
    
    if (num1 == num2) {
        return "São os mesmos valores!!";
    }  
}

const retorno = compararNum (Number(num1), Number(num2));
alert(retorno);