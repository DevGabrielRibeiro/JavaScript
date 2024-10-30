function trocarImagem(src) {
    let imagemPrincipal = document.getElementById('imagem-principal');
    imagemPrincipal.style.opacity = 0;
    setTimeout(function() {
        imagemPrincipal.src = src;
        imagemPrincipal.style.opacity = 1;
    }, 500);
}
