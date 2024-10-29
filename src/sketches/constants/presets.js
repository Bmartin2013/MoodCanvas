import { colors } from "./colors";

const CALM_DEFAULT = {
    toggleAnimation: true,
    toggleBreath: true,
    bSpeed: 'SLOW',
    aSpeed: 'DEFAULT',
    inrShapeColor: colors.COLOR_BLUE,
    extShapeColor: colors.COLOR_BLUE,
    extShapeSize: 400,
    inrShapeSize: 200,
}


const SADNESS_DEFAULT = {
    toggleAnimation: true,
    toggleBreath: true,
    bSpeed: 'SLOW',
    aSpeed: 'DEFAULT',
    inrShapeColor: colors.COLOR_DARK_BLUE,
    extShapeSize: 400,
    inrShapeSize: 200,
}


const ANGER_DEFAULT = {
    toggleAnimation: true,
    toggleBreath: true,
    bSpeed: 'FAST',
    aSpeed: 'DEFAULT',
    inrShapeColor: colors.COLOR_RED,
    extShapeColor: colors.COLOR_RED,
    inrShapeSize: 150,
    extShapeSize: 160,
}


const ANXIETY_DEFAULT = {
    toggleAnimation: true,
    toggleBreath: true,
    bSpeed: 'MEDIUM_FAST',
    aSpeed: 'DEFAULT',
    inrShapeColor: colors.COLOR_VIBRANT_ORANGE,
    extShapeColor: colors.COLOR_ORANGE,
    inrShapeSize: 200,
    extShapeSize: 150,
}


const ACCOMPLISHED_DEFAULT = {
    toggleAnimation: true,
    toggleBreath: true,
    bSpeed: 'SLOW',
    aSpeed: 'DEFAULT',
    inrShapeColor: colors.COLOR_VIBRANT_GREEN,
    extShapeColor: colors.COLOR_GREEN,
    inrShapeSize: 200,
    extShapeSize: 500,
}

const FEAR_DEFAULT = {
    toggleAnimation: true,
    toggleBreath: true,
    bSpeed: 'FAST',
    aSpeed: 'DEFAULT',
    inrShapeColor: colors.COLOR_DARK_RED,
    extShapeColor: colors.COLOR_RED,
    inrShapeSize: 250,
    extShapeSize: 340,
}


const JOY_DEFAULT = {
    toggleAnimation: true,
    toggleBreath: true,
    bSpeed: 'MEDIUM',
    aSpeed: 'DEFAULT',
    inrShapeColor: colors.COLOR_YELLOW,
    extShapeColor: colors.COLOR_YELLOW,
    inrShapeSize: 300,
}

export const BACKGROUND_DEFAULT = {
    inrShapeSize:600,
    inrShapeColor: colors.COLOR_BACKGROUND
}



export const EMOTION_PRESET = {
    CALM: CALM_DEFAULT,
    SADNESS: SADNESS_DEFAULT,
    ANGER: ANGER_DEFAULT,
    ANXIETY: ANXIETY_DEFAULT,
    FEAR: FEAR_DEFAULT,
    ACOMPLISHED: ACCOMPLISHED_DEFAULT,
    JOY: JOY_DEFAULT
};


export const EMOTIONS = [
    "CALM",
    "ANGER",
    "ACOMPLISHED",
    "ANXIETY",
    "JOY",
    "FEAR",
    "SADNESS",
]