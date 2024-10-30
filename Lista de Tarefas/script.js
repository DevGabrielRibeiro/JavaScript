let botaoAdicionar = document.getElementById('adicionar-tarefa');

botaoAdicionar.addEventListener('click', function() {
    let tarefaTexto = document.getElementById('nova-tarefa').value;
    if (tarefaTexto === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }
    let li = document.createElement('li');
    li.textContent = tarefaTexto;
    li.onclick = function() {
        this.classList.toggle('completed');
    };
    document.getElementById('lista-tarefa').appendChild(li);
    document.getElementById('nova-tarefa').value = '';
});



