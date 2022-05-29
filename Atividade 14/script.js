const pesquisa = document.getElementsByName("pesquisa");

function validaDados(){

    if (document.forms.formulario.elements[0].value.length < 10) {
        alert("Preencha o nome corretamente!");
        document.forms.formulario.elements[0].focus();

        return false;
    }

    if (document.forms.formulario.elements[1].value.indexOf('@') == -1 || document.forms.formulario.email.value.indexOf('.') == -1) {
        alert("Preencha o email corretamente!");
        document.forms.formulario.email.focus();

        return false;
    }

    if (document.forms.formulario.elements[2].value.length < 20) {
        alert("Comentário precisa ter pelo menos 20 caracteres!");
        document.forms.formulario.elements[2].focus();

        return false;
    }

    for(var i = 0; i < pesquisa.length; i++){
        if(pesquisa[i].checked){
            if(pesquisa[i].value == "sim"){
                alert("Que bom que você voltou a visitar a página!");

                return true;
            }else{
                alert("Volte sempre à esta página!");

                return true;
            }
        }else{
            if(i+1 == pesquisa.length){
                alert("Selecione uma opção para a Pesquisa!");

                return false;
            }
        }
    }
}

function limpa(){
    document.getElementById("formulario").reset();
}