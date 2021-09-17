//Recebe as ordens das cores
let order = [];

//Recebe ordem dos cliques
let clickedOrder = [];

//Recebe a pontuação do jogo
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

// Recebe as divs
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// Função sorteia cor
let shuffleOrder = () => {
    //Recebe numero aleatorio de 0 a 3
    let colorOrder = Math.floor(Math.random() * 4);
    //Insere o valor de colorOrder no index
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

//Funçao deixa cor mais clara ao ser escolhida
let lightColor = (element, number) => {
    number = number * 500;

    //Acende
    setTimeout(() =>{
        element.classList.add('select');
    },number - 250);
    
    //Apaga
    setTimeout(() => {
        element.classList.remove('select');
    },number + 250);
}

//Função verifica se os botoes clicados são os mesmos que os sorteados
let checkOrder = () => {

    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Prontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Função para clicar no botão
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('select');

    setTimeout(() => {
        createColorElement(color).classList.remove('select');
        checkOrder();
    },250);
}

//Função cria Elemento
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Função próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função perdeu o jogo
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Iniciando um nojo jogo!');
    score = 0;

    nextLevel();
}

//Adiciona evento de clique
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();