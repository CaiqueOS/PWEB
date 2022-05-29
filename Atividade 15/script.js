var cursos = document.getElementById("cursos");

function carregaCurso(){
    var selecionado = cursos.value;

    if(selecionado != ""){
        var confirmacao = confirm("Deseja ver as informações do curso?");

        if(confirmacao){
            if(selecionado == "ads"){
                // paginaCurso = window.open("ads.html", "ads", "width = 600, height = 300");
                // Eu tentei fazer sem abrir direto o site da fatec, mas a página abria e fechava logo em seguida
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_ads.asp", "ads", "width = 600, height = 300");
            }else if(selecionado == "ea"){
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_ea.asp", "ea", "width = 600, height = 300");
            }else if(selecionado == "fm"){
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_fm.asp", "fm", "width = 600, height = 300");
            }else if(selecionado == "gq"){
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_gq.asp", "gq", "width = 600, height = 300");
            }else{
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_ma.asp", "ma", "width = 600, height = 300");
            }
        }
    }
}
