document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let formValid = true;

    const cpf = document.getElementById('cpf').value;
    const numeroCartao = document.getElementById('numeroCartao').value;
    const codigoSeguranca = document.getElementById('codigoSeguranca').value;

    // Verifica o comprimento dos campos
    if (cpf.length !== 11) {
        formValid = false;
        alert('O CPF deve ter exatamente 11 dígitos.');
        document.getElementById('cpf').style.borderColor = 'red';
    } else {
        document.getElementById('cpf').style.borderColor = '';
    }

    if (numeroCartao.length !== 12) {
        formValid = false;
        alert('O número do cartão deve ter exatamente 12 dígitos.');
        document.getElementById('numeroCartao').style.borderColor = 'red';
    } else {
        document.getElementById('numeroCartao').style.borderColor = '';
    }

    if (codigoSeguranca.length !== 3) {
        formValid = false;
        alert('O código de segurança deve ter exatamente 3 dígitos.');
        document.getElementById('codigoSeguranca').style.borderColor = 'red';
    } else {
        document.getElementById('codigoSeguranca').style.borderColor = '';
    }

    // Verifica se todos os campos estão preenchidos
    const inputs = this.querySelectorAll('input');
    inputs.forEach(input => {
        if (!input.value) {
            formValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!formValid) {
        alert('Por favor, preencha todos os campos corretamente!');
        event.preventDefault(); // Impede o envio do formulário
    } else {
        alert('O formulário foi enviado com sucesso!');
    }
});
