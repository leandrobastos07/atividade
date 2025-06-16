let mostraResultado = document.querySelector("#resultado");
let inscritos = 0;
let times = 0;

function inscrever (){
    inscritos ++;
    times = parseInt(inscritos / 3);

    mostraResultado.innerHTML =`<p> Número de inscritos: ${inscritos}.</p><p>número de times ${times}:`;

    if (times >= 4 ){
      alert ("Ja é possivel iniciar o campeonato, pois temos 4 equipes");
    }
}
