const form = document.getElementById("form");
const idade = document.getElementById("idade");
const sexo = document.getElementsByName("sexo");
const opiniao = document.getElementsByName("opiniao");

var contaEnvios = 0;
var maiorIdade;
var menorIdade;
var qtdeHomem;
var qtdeMulher;
var qtdeP;
var qtdeOB;

function enviar() {
    if(validar_idade()){
        if (contaEnvios == 0) {
            inicializa();
        }
    
        contaIdade += parseInt(idade.value);
    
        if (parseInt(idade.value) > maiorIdade) {
            maiorIdade = parseInt(idade.value);
        }
    
        if (parseInt(idade.value) < menorIdade) {
            menorIdade = parseInt(idade.value);
        }
    
        sexo.forEach((se) => {
            if (se.checked) {
                if (se.value == "M") {
                    qtdeHomem++;
                } else {
                    qtdeMulher++;
                }
            }
        });
    
        opiniao.forEach((oe) => {
            if (oe.checked) {
                switch (oe.value) {
                    case "P":
                        qtdeP++;
                        break;
                    case "B":
                        qtdeOB++;
                        break;
                    case "O":
                        qtdeOB++;
                        break;
                }
            }
        });
    
        contaEnvios++;
    
        if (contaEnvios == 10) {
            exibir();
            inicializa();
            form.reset();
        }else{
            form.reset();
        }
    }else{
        alert("Insira uma Idade válida!!");
    }
}

function inicializa() {
    contaIdade = 0;
    mediaIdade = 0;
    maiorIdade = 0;
    menorIdade = 1000;
    qtdeHomem = 0;
    qtdeMulher = 0;
    qtdeP = 0;
    qtdeOB = 0;
}

function exibir() {
    mediaIdade = contaIdade / 10;
    alert("Média de Idades: " + Math.round(mediaIdade));
    alert("Idade mais velha: " + maiorIdade);
    alert("Idade mais nova: " + menorIdade);
    alert("Quatidade de Péssimos: " + qtdeP);
    alert("Porcentagem de Ótimos ou Bons: " + Math.round(qtdeOB / 10 * 100) + "%");
    alert("Homens: " + qtdeHomem + ", Mulheres: " + qtdeMulher);
    contaEnvios = 0;
}

function validar_idade(){
    if(parseInt(idade.value) <= 0 || idade.value == ""){
        return 0;
    }else{
        return 1;
    }
}