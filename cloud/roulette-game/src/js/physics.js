function calculateDeceleration(initialVelocity, time) {
    const gravity = 9.81; // Aceleração devido à gravidade em m/s²
    return initialVelocity - (gravity * time);
}

function calculateBallPosition(initialPosition, velocity, time) {
    return initialPosition + (velocity * time) - (0.5 * 9.81 * Math.pow(time, 2));
}

function calculateRotationAngle(initialAngle, angularVelocity, time) {
    return initialAngle + (angularVelocity * time);
}

function simulatePhysics(initialVelocity, initialPosition, initialAngle, angularVelocity, deltaTime) {
    const newVelocity = calculateDeceleration(initialVelocity, deltaTime);
    const newPosition = calculateBallPosition(initialPosition, newVelocity, deltaTime);
    const newAngle = calculateRotationAngle(initialAngle, angularVelocity, deltaTime);

    return {
        velocity: newVelocity,
        position: newPosition,
        angle: newAngle
    };
}