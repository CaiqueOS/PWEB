/*Questão 1*/
function Retangulo(x, y){
    this.x = x;
    this.y = y;

    this.calcArea = function() {
        return this.x * this.y;
    };
}

var retangulo = new Retangulo(10, 20);

alert(retangulo.calcArea());

/*Questão 2*/
function Conta(){
    var nome, banco, nConta, saldo;

    this.getNome = function(){
        return nome;
    }

    this.setNome = function(nome){
        this.nome = nome;
    }

    this.getBanco = function(){
        return banco;
    }

    this.setBanco = function(banco){
        this.banco = banco;
    }

    this.getNConta = function(){
        return nConta;
    }

    this.setNConta = function(nConta){
        this.nConta = nConta;
    }

    this.getSaldo = function(){
        return saldo;
    }

    this.setSaldo = function(saldo){
        this.saldo = saldo;
    }
}

function ContaCorrente() {
    var saldoEspecial;

    this.getSaldoEspecial = function(){
        return saldoEspecial;
    }

    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    }
}

function ContaPoupanca() {
    var juros, dataVencimento;

    this.getjuros = function(){
        return juros;
    }

    this.setjuros = function(juros){
        this.juros = juros;
    }

    this.getDataVencimento = function(){
        return dataVencimento;
    }

    this.setDataVencimento = function(dataVencimento){
        this.dataVencimento = dataVencimento;
    }
}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

objContaCorrente = new ContaCorrente();
objContaPoupanca = new ContaPoupanca();

objContaCorrente.setNome('Edson Isaac');
objContaCorrente.setBanco('Santander');
objContaCorrente.setNConta('002743563');
objContaCorrente.setSaldo(0.92);
objContaCorrente.setSaldoEspecial(200.00);

objContaPoupanca.setNome('Barbara Marcolino');
objContaPoupanca.setBanco('Santander');
objContaPoupanca.setNConta('002234561');
objContaPoupanca.setSaldo(200.00);
objContaPoupanca.setjuros(1000.00);
objContaPoupanca.setDataVencimento('22/12/2026');

console.log(objContaCorrente);
console.log(objContaPoupanca);