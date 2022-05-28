const texto = document.getElementById("texto");
const form = document.getElementById("form");
const opcoes = document.getElementsByName("opcao");

function limpa(){
    form.reset();
}

function envia(){
    if(texto.value == ""){
        alert("Insira o texto!!");
    }else{
        for(var i = 0; i < opcoes.length; i++){
            if(opcoes[i].checked){
                if(opcoes[i].value == "upper"){
                    texto.value = texto.value.toUpperCase();
                }else if(opcoes[i].value == "lower"){
                    texto.value = texto.value.toLowerCase();
                }
            }
        }
    }
}