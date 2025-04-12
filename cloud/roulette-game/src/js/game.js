// Este arquivo contém o ponto de entrada do jogo da roleta. 
// Ele inicializa o Canvas, configura a roleta e gerencia a lógica do jogo.

const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

let isSpinning = false;
let angle = 0;
let spinDuration = 5000; // Duração do giro em milissegundos
let spinStartTime;

function drawRoulette() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle * Math.PI / 180);
    
    // Desenhar a roleta (exemplo simplificado)
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(0, 0, 150, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
}

function spinRoulette() {
    if (!isSpinning) {
        isSpinning = true;
        spinStartTime = performance.now();
        requestAnimationFrame(animateSpin);
    }
}

function animateSpin(timestamp) {
    const elapsed = timestamp - spinStartTime;
    const progress = Math.min(elapsed / spinDuration, 1);
    
    angle += 360 * progress; // Aumenta o ângulo de rotação
    drawRoulette();
    
    if (progress < 1) {
        requestAnimationFrame(animateSpin);
    } else {
        isSpinning = false;
        // Aqui você pode adicionar lógica para determinar o resultado da roleta
    }
}

// Adiciona um evento de clique para iniciar o giro
document.getElementById('spinButton').addEventListener('click', spinRoulette);

// Inicializa o Canvas
canvas.width = 400;
canvas.height = 400;
drawRoulette();