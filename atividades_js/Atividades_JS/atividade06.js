function soma(numeros){
    let somaTotal = 0
    for (i = 0; i < numeros.length; i++){ 
        somaTotal = somaTotal + numeros[i];
    }
    return somaTotal;
}
console.log(soma([2 , 5 , 3]))