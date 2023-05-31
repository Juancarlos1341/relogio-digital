const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const textoHtml = document.getElementById('texto');

const relogio = setInterval(function time(){
    let dataAtual = new Date();

    let horasAtual = dataAtual.getHours();
    horas.textContent = horasAtual;

    let minutosAtual = dataAtual.getMinutes();
    minutos.textContent = minutosAtual;

    let segundosAtual = dataAtual.getSeconds();
    segundos.textContent = segundosAtual;
    setTexto(horasAtual);

})

function setTexto (horasAtual){
    if (horasAtual >= 18 && horasAtual <= 23){
        textoHtml.textContent = 'Boa Noite';
    }
    if (horasAtual >= 12 && horasAtual < 18) {
        textoHtml.textContent = 'Boa Tarde';
    } 
    if (horasAtual >= 6 && horasAtual < 12) {
        textoHtml.textContent = 'Bom Dia';
    }
    if (horasAtual >= 1 && horasAtual <= 5){
        textoHtml.textContent = 'Boa Madrugada'
    }
}