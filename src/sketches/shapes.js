import { ANIMATION_SPEED, BREATHING_SPEEDS } from "./constants/speeds";

let breathOffset = 0;
let breathingIn = true;
let angleOffset = 0;

export function drawCircle(size, col, p, breathOffset) {
    p.noStroke();
    p.fill(col);

    for (let i = 0; i < 5; i++) {
        let circleSize = size - i * 30 + breathOffset;
        p.ellipse(p.width / 2, p.height / 2, circleSize, circleSize);
    }
}

export function drawSquare(size, col, p, angleOffset) {
    p.noStroke();
    p.fill(col);
    for (let i = 0; i < 4; i++) {
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(p.TWO_PI / 4 * i + angleOffset);
        p.rect(-size / 2, -size / 2, size, size);
        p.pop();
    }
}

export function drawTriangle(size, col, p, angleOffset) {
    p.noStroke();
    p.fill(col);
    for (let i = 0; i < 6; i++) {
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(p.TWO_PI / 6 * i + angleOffset);
        p.beginShape();
        p.vertex(0, 0);
        p.vertex(size, -size);
        p.vertex(size * 2, 0);
        p.endShape(p.CLOSE);
        p.pop();
    }
}

export function drawSmallRotatingCircles(p, angleOffset, smallCircleCount, smallCircleRadius, smallCircleSize, strokeColor = 255) {
    for (let i = 0; i < smallCircleCount; i++) {
        p.push();
        p.translate(p.width / 2, p.height / 2); // Mueve el origen al centro del canvas
        p.rotate(p.TWO_PI / smallCircleCount * i + angleOffset); // Rota según el índice y el offset de ángulo
        p.noFill(); // Sin relleno
        p.stroke(strokeColor); // Color del borde
        // Ajusta la posición de los pequeños círculos para que estén en la periferia del círculo grande
        p.ellipse(smallCircleRadius, 0, smallCircleSize, smallCircleSize); // Dibuja el pequeño círculo
        p.pop();
    }
}

export function drawSmallRotatingTriangles(p, angleOffset, triangleCount, triangleRadius, triangleSize, triangleColor) {
    for (let i = 0; i < triangleCount; i++) {
        p.push();
        p.translate(p.width / 2, p.height / 2); // Mueve el origen al centro del canvas
        p.rotate(p.TWO_PI / triangleCount * i + angleOffset); // Rota los triángulos alrededor del círculo central
        p.noFill();
        p.stroke(triangleColor);
        p.beginShape();
        p.vertex(triangleRadius, 0); // Base del triángulo hacia afuera
        p.vertex(triangleRadius + triangleSize, -triangleSize / 2); // Punta izquierda
        p.vertex(triangleRadius + triangleSize, triangleSize / 2);  // Punta derecha
        p.endShape(p.CLOSE);
        p.pop();
    }
}

export function drawAnimation(toggleBreath, toggleAnimation, brSpeed='SLOW', aSpeed) {
    const { breathSpeed, breathAmplitude } = BREATHING_SPEEDS[brSpeed];
    const { speed } = ANIMATION_SPEED[aSpeed];

    // Ajuste de respiración
    if (toggleBreath) {
        if (breathingIn) {
            breathOffset += breathSpeed; // Aumentar la velocidad de respiración
            if (breathOffset > breathAmplitude) { // Limitar la amplitud
                breathingIn = false;
            }
        } else {
            breathOffset -= breathSpeed; // Reducir con la misma velocidad
            if (breathOffset < -breathAmplitude) {
                breathingIn = true;
            }
        }
    };

    // Animación de rotación
    if (toggleAnimation) {
        angleOffset += speed;
    }

    return { breathOffset, angleOffset };
}

