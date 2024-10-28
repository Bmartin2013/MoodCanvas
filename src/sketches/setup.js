import { EMOTION_PRESET, BACKGROUND_DEFAULT } from "./constants/presets";
import { drawAnger, drawAccomplished, drawJoy, drawSadness, drawCalm, drawFear, drawAnxiety } from "./BaseCompositions";

function drawEmotion(p, emotion, options) {
    switch (emotion) {
        case 'ANGER':
            drawAnger(p, options);
            break;
        case 'ACOMPLISHED':
            drawAccomplished(p, options);
            break;
        case 'JOY':
            drawJoy(p, options);
            break;
        case 'SADNESS':
            drawSadness(p, options);
            break;
        case 'CALM':
            drawCalm(p, options);
            break;
        case 'ANXIETY':
            drawAnxiety(p, options);
            break;
        case 'FEAR':
            drawFear(p, options);
            break;
        default:
            console.error('Unknown emotion:', emotion);
            break;
    }
}

export function setup(p, isGifSaved, sketchName='sketch') {
    drawBackground(BACKGROUND_DEFAULT.inrShapeSize, p.color(...BACKGROUND_DEFAULT.inrShapeColor), p)
    if (isGifSaved) {
        p.saveGif(sketchName, 5)
    }
}

export function drawBackground(size, color, p) {
    p.createCanvas(size, size);
    p.noFill();
    p.background(color);

}

const mergeOptions = (preset, customOptions) => {
    return {
        ...preset,
        ...customOptions,
    };
};

export function drawComposition(p, emotions, options) {
    p.background(30, 30, 40);
    emotions.forEach(emotion => {
        const preset = EMOTION_PRESET[emotion];
        const mergedOptions = options ? mergeOptions(preset, options) : preset;
        drawEmotion(p, emotion, mergedOptions);
    });
}