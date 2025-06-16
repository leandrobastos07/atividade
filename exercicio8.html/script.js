let estacao;
let mostraResultado = document.querySelector(`#resultado`);

    function mes() {
estacao = window.prompt("Digite o mês: ").toUpperCase()

if (estacao == "JANEIRO" || estacao == "FEVEREIRO" || estacao == "DEZEMBRO") { 
    mostraresultado.innerHTML = `<p>A estação é: Verão</p>`;
    document.body.style.backgroundColor = "blue";

}

if (estacao == "MARÇO" || estacao == "ABRIL" || estacao == "MAIO") {
    mostraresultado.innerHTML = `<p>A estação é: Outono</p>`;
    document.body.style.backgroundColor = "blue";

}
if (estacao == "JUNHO" || estacao == "JULHO" || estacao == "AGOSTO") {
    mostraresultado.innerHTML = `<p>A estação é: Inverno</p>`;
    document.body.style.backgroundColor = "blue";

}
if (estacao == "SETEMBRO" || estacao == "OUTUBRO" || estacao == "NOVEMBRO") {
    mostraresultado.innerHTML = `<p>A estação é: Primavera</p>`;
    document.body.style.backgroundColor = "blue";

    }
}