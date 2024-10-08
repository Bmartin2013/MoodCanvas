import { colors } from "./constants/colors";
import { drawCircle, drawTriangle, drawSquare, drawAnimation, drawSmallRotatingCircles, drawSmallRotatingTriangles } from "./shapes";

export function drawAnger(p, options) {
    const { toggleBreath, toggleAnimation, bSpeed, aSpeed , extShapeColor = colors.COLOR_RED, inrShapeColor = colors.COLOR_RED, inrShapeSize, extShapeSize } = options
    const { breathOffset, angleOffset } = drawAnimation(toggleBreath, toggleAnimation, bSpeed, aSpeed);
    drawTriangle(extShapeSize, p.color(...extShapeColor), p, angleOffset);
    drawCircle(inrShapeSize, p.color(...inrShapeColor), p, breathOffset);
}

export function drawAnxiety(p, options) {
    const { toggleBreath, toggleAnimation, bSpeed, aSpeed, extShapeColor, inrShapeColor, inrShapeSize, extShapeSize} = options
    const { breathOffset, angleOffset } = drawAnimation(toggleBreath, toggleAnimation, bSpeed, aSpeed);
    drawTriangle(extShapeSize, p.color(...extShapeColor), p, angleOffset);
    drawCircle(inrShapeSize, p.color(...inrShapeColor), p, breathOffset);
}

export function drawJoy(p, options) {
    const { toggleBreath, toggleAnimation, bSpeed, aSpeed, extShapeColor , inrShapeColor, smallCircleCount = 12, smallCircleSize = 30, smallCircleRadius = 240, inrShapeSize } = options;
    const { breathOffset, angleOffset } = drawAnimation(toggleBreath, toggleAnimation, bSpeed, aSpeed);

    //  draw big circle
    drawCircle(inrShapeSize, p.color(...extShapeColor), p, breathOffset);

    // draw small circles
    drawSmallRotatingCircles(p, angleOffset, smallCircleCount, smallCircleRadius, smallCircleSize, p.color(...inrShapeColor));
}

export function drawCalm(p, options) {
    const { toggleBreath, toggleAnimation, bSpeed, aSpeed, extShapeColor, inrShapeColor, inrShapeSize, extShapeSize } = options;
    const { breathOffset, angleOffset } = drawAnimation(toggleBreath, toggleAnimation, bSpeed, aSpeed);

    drawSquare(inrShapeSize, p.color(...inrShapeColor), p, angleOffset);

    p.noFill();
    p.stroke(p.color(...extShapeColor));

    p.ellipse(p.width / 2, p.height / 2, extShapeSize + breathOffset, extShapeSize + breathOffset); // Círculo animado
}

export function drawSadness(p, options) {
    const { toggleBreath, toggleAnimation, bSpeed='SLOW', aSpeed, inrShapeColor, inrShapeSize } = options;
    const { breathOffset, angleOffset } = drawAnimation(toggleBreath, toggleAnimation, bSpeed, aSpeed);
    drawCircle(inrShapeSize, p.color(...inrShapeColor), p, breathOffset);
}

export function drawAccomplished(p, options) {
    const { toggleAnimation, toggleBreath, bSpeed, aSpeed, extShapeSize, inrShapeSize, extShapeColor, inrShapeColor, smallCircleCount = 10, smallCircleRadius = 250, smallCircleSize = 40,  } = options;
    const { breathOffset, angleOffset } = drawAnimation(toggleBreath, toggleAnimation, bSpeed, aSpeed);

    drawSquare(inrShapeSize, p.color(...inrShapeColor), p, angleOffset);

    drawSmallRotatingCircles(p, angleOffset, smallCircleCount, smallCircleRadius, smallCircleSize, p.color(...inrShapeColor));

    p.noFill();
    p.stroke(p.color(...extShapeColor));
    p.ellipse(p.width / 2, p.height / 2, extShapeSize, extShapeSize);
}

export function drawFear(p, options) {
    const { toggleAnimation, toggleBreath, bSpeed, aSpeed, inrShapeSize, extShapeSize, triangleCount = 8, triangleRadius = 160, triangleSize = 100, extShapeColor, inrShapeColor} = options;
    const { breathOffset, angleOffset } = drawAnimation(toggleBreath, toggleAnimation, bSpeed, aSpeed);

    drawCircle(inrShapeSize + breathOffset, p.color(...inrShapeColor), p, breathOffset);

    const triangleRotationSpeed = p.frameCount * 0.03;
    drawSmallRotatingTriangles(p, triangleRotationSpeed, triangleCount, triangleRadius, triangleSize, p.color(...extShapeColor));

    p.noFill();
    p.stroke(p.color(...inrShapeColor));
    p.ellipse(p.width / 2, p.height / 2, extShapeColor + breathOffset * 2, extShapeSize + breathOffset * 2);
}