// function abrirPweb(){
//     var win = window.open("https://github.com/CaiqueOS/PWEB", '_blank');
//     win.focus();
// }

// function abrirLp2(){
//     var win = window.open("https://github.com/CaiqueOS/LP2", '_blank');
//     win.focus();
// }

const scroll = document.getElementById("millennium");

function scrollTop() {
    if (this.scrollY >= 120)
        scroll.style.visibility = "visible";
    else
        scroll.style.visibility = "hidden";
}

window.addEventListener('scroll', scrollTop);

scroll.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});


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