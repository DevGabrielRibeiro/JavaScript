/*Adicionando Evento de click na foto do Lionel Messi*/
let descricaoMessi = document.getElementById('foto-messi');
descricaoMessi.addEventListener('click', function() {
    var descricao = document.getElementById('descricao-messi');
    descricao.style.display = (descricao.style.display === 'none' || descricao.style.display === '') ? 'block' : 'none';
});

/*Adicionando Evento de click na foto da Ivete Sangalo*/
let descricaoIvete = document.getElementById('foto-ivete');
descricaoIvete.addEventListener('click', function() {
    var descricao = document.getElementById('descricao-ivete');
    descricao.style.display = (descricao.style.display === 'none' || descricao.style.display === '') ? 'block' : 'none';
});

/*Adicionando Evento de click na foto do Eminem*/
let descricaoEminem = document.getElementById('foto-eminem');
descricaoEminem.addEventListener('click', function() {
    var descricao = document.getElementById('descricao-eminem');
    descricao.style.display = (descricao.style.display === 'none' || descricao.style.display === '') ? 'block' : 'none';
});

/*Adicionando Evento de click na foto da Simone Biles*/
let descricaoSimone = document.getElementById('foto-simone');
descricaoSimone.addEventListener('click', function() {
    var descricao = document.getElementById('descricao-simone');
    descricao.style.display = (descricao.style.display === 'none' || descricao.style.display === '') ? 'block' : 'none';
});