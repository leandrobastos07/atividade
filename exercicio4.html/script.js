function media() {
    let nota1 = Number(window.prompt("digite a primeira nota:"));
    let nota2 = Number(window.prompt("digite a segunda nota:"));
    let nota3 = Number(window.prompt("digite a terceira nota:"));

    let media = (nota1 + nota2 + nota3) /3 ;

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>O resultado é ${media}</p>;`

    console.log(resultado);

   if(media >= 60) {
     
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<h2><p>você já está na média: </p></h2>;`

   } else {
        let sobra = 60 - media
          
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<H2><p>Você ainda nâo está na média,ainda faltam ${sobra} pontos:</p></h2>;`

   }

}