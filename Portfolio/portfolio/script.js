function abrirPweb(){
    var win = window.open("https://github.com/CaiqueOS/PWEB", '_blank');
    win.focus();
}

function abrirLp2(){
    var win = window.open("https://github.com/CaiqueOS/LP2", '_blank');
    win.focus();
}


function reveal() {
    var imagem = document.querySelectorAll(".fade");

    for (var i = 0; i < imagem.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = imagem[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            imagem[i].classList.add("ativar");
        } else {
            imagem[i].classList.remove("ativar");
        }
    }
}

window.addEventListener("scroll", reveal);