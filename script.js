const cores = document.getElementById('cores');
const cor = document.getElementById('cor');
const textoCor = document.getElementById('textoCor');
const corAnterior = document.getElementById('corAnterior');
const corPosterior = document.getElementById('corPosterior');
const arrayCores = [{
        cor: 'red',
        texto: 'O vermelho é uma cor estimulante e vibrante que pode evocar emoções fortes, como paixão, energia e urgência. Também é frequentemente usado para chamar a atenção para elementos importantes do site. No entanto, o vermelho em excesso pode criar uma sensação de agressão ou pressão.'
    }, 
    {
        cor: 'green',
        texto: 'O verde é frequentemente associado à natureza, frescor e saúde. É uma cor relaxante que pode criar uma sensação de equilíbrio e harmonia. É frequentemente utilizado em sites relacionados ao meio ambiente, alimentos saudáveis e bem-estar.'
    }, 
    {
        cor: 'yellow',
        texto: 'O amarelo é uma cor alegre e otimista, que pode transmitir calor, felicidade e entusiasmo. No entanto, em excesso, o amarelo pode ser cansativo para os olhos, então use-o com moderação.'
    }, 
    {
        cor: 'blue',
        texto: 'O azul é uma cor tranquila e confiável, frequentemente associada à calma, segurança e confiança. É comum em sites corporativos, financeiros e tecnológicos, pois transmite profissionalismo e estabilidade.'
    }, 
    {
        cor: 'black',
        texto: 'O preto pode ser uma escolha elegante e sofisticada, muitas vezes associada ao luxo e ao poder. No entanto, em excesso, o preto pode criar uma sensação de opressão ou tristeza, por isso é importante equilibrá-lo com outras cores.'
    }, 
    {
        cor: 'white',
        texto: 'O branco é frequentemente usado como pano de fundo limpo e neutro em design de sites. Pode transmitir simplicidade, pureza e minimalismo.'
}];
let control = 0;

// cores.addEventListener('click', function() {
//     window.location.href = arrayCores[control].cor + '.html';
// });

corAnterior.addEventListener('click', function() {
    if (control === 5) {
        cores.style.background = 'white';
        cores.style.color = 'black';
    }
    if (control === 0) {
        return;
    }
    else {
        control -= 1;
        cores.style.border = 'solid 1px ' + arrayCores[control].cor;
        cor.style.background = arrayCores[control].cor;
        textoCor.innerHTML = arrayCores[control].texto;
        console.log(control, cores.style.border);
    }
});

corPosterior.addEventListener('click', function() {
    if (control === arrayCores.length - 1) {
        return;
    }
    else {
        control += 1;
        if (control === 5) {
            cores.style.backgroundImage = 'linear-gradient(135deg, #333, #0a0a0a)';
            cor.style.background = arrayCores[control].cor;
            cores.style.color = arrayCores[control].cor;
            textoCor.innerHTML = arrayCores[control].texto;
            cores.style.border = '#333';
            return;
        }
        cores.style.border = 'solid 1px ' + arrayCores[control].cor;
        cor.style.background = arrayCores[control].cor;
        textoCor.innerHTML = arrayCores[control].texto;
        console.log(control);
    }
});