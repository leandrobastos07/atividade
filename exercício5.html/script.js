let aleatorio = parseInt(Math.random () * 101);
let MostraResultado = document.querySelector("#resultado");
let jogador;
let MostraTentativa = document.querySelector("#tentativa");

function pensar() { 
    jogador = Number(window.prompt("Digite um numero entre 1 e 100"))

    if (jogador !=aleatorio) {
        if (jogador > aleatorio) {
            MostraResultado.innerHTML += `<p>Voce tentou o numero ${jogador}, tente um numero MENOR!</p>;`
        } else { 
            MostraResultado.innerHTML += `<p>Voce tentou o numero ${jogador}, tente um numero MAIOR!</p>;`
        }
    } else {
        MostraResultado.innerHTML += `<p>Parabens! voce acerto o numero ${aleatorio}.</p>;`

    }


}