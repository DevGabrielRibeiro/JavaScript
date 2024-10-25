// Criar a função para buscar pokémons
function buscarPokemon() {
    var nome = document.getElementById('pokemon-name').value.toLowerCase();
    var url = 'https://pokeapi.co/api/v2/pokemon/' + nome;

    fetch(url)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(function (data) {
            
            var habilidades = '';
            for (var i = 0; i < data.abilities.length; i++) {
                habilidades += '<p>' + data.abilities[i].ability.name + '</p>';
            }

            document.getElementById('resultado').innerHTML =
                '<p><strong>Nome: </strong>' + data.name + '</p>' +
                '<p><strong>Altura: </strong>' + data.height + '</p>' +
                '<p><strong>Peso: </strong>' + data.weight + '</p>' +
                '<p><strong>Habilidades</strong></p>' +
                '<div>' + habilidades + '</div>' + 
                '<img src="' + data.sprites.front_default + '" alt="' + data.name + '" />';
        })
}
        // Criando uma key para o input
        var buscar = document.getElementById('pokemon-name');
        buscar.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                buscarPokemon();
            }
        });