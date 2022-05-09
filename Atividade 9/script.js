const form = document.getElementById("form");
const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const n3 = document.getElementById("num3");

var nMaior;
var ordemCrescente;

function maior(){
    if(parseInt(n1.value) > parseInt(n2.value) && parseInt(n1.value) > parseInt(n3.value)){
        nMaior = parseInt(n1.value);
    }else if(parseInt(n2.value) > parseInt(n3.value) && parseInt(n2.value) > parseInt(n3.value)){
        nMaior = parseInt(n2.value);
    }else{
        nMaior = parseInt(n3.value);
    }

    alert("Maior número: " + nMaior);

    form.reset();
}

function crescente(){
    ordemCrescente = [n1.value, n2.value, n3.value];

    ordemCrescente.sort((a, b) => {
        return a-b;
    });

    alert("Ordem Crescente: " + ordemCrescente);

    form.reset();
}