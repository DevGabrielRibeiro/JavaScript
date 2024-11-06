function verificadorNumero(num1, num2){ 
            if (num1 % num2 === 0) {
                return true;
            }
            return false;
        }
    console.log(verificadorNumero(5, 5));