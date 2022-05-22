const janela = document.getElementById("janela");
const texto = document.getElementById("lblJanela");

function abre(){
    janela.src = "./img/janelaaberta.png";
    texto.innerHTML = "Janela está aberta!";
}

function quebra(){
    janela.src = "./img/janelaquebrada.png";
    texto.innerHTML = "Você quebrou a janela!";
}

function fecha(){
    janela.src = "./img/janelafechada.png";
    texto.innerHTML = "Abra a janela!";
}
