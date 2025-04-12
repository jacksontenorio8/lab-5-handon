function drawRouletteWheel(ctx, colors, angle) {
    const radius = 200;
    const numSegments = colors.length;
    const segmentAngle = (2 * Math.PI) / numSegments;

    for (let i = 0; i < numSegments; i++) {
        const startAngle = i * segmentAngle + angle;
        const endAngle = (i + 1) * segmentAngle + angle;

        ctx.beginPath();
        ctx.arc(250, 250, radius, startAngle, endAngle);
        ctx.lineTo(250, 250);
        ctx.fillStyle = colors[i];
        ctx.fill();
        ctx.stroke();
    }
}

function drawBall(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
}

function animateRoulette(ctx, colors, angle, ballPosition) {
    ctx.clearRect(0, 0, 500, 500);
    drawRouletteWheel(ctx, colors, angle);
    drawBall(ctx, ballPosition.x, ballPosition.y);
}

function updateAnimation() {
    const canvas = document.getElementById('rouletteCanvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    let angle = 0;
    let ballPosition = { x: 250, y: 50 };

    function loop() {
        angle += 0.05; // Rotação da roleta
        ballPosition.y += 2; // Movimento da bolinha
        if (ballPosition.y > 250) {
            ballPosition.y = 50; // Reinicia a posição da bolinha
        }
        animateRoulette(ctx, colors, angle, ballPosition);
        requestAnimationFrame(loop);
    }

    loop();
}

window.onload = updateAnimation;