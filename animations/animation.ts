export const opacityL = {
    hidden: {
        translateX: 50,
        opacity: 0,
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    show: {
        translateX: 0,
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
}

export const opacityR = {
    hidden: {
        translateX: -50,
        opacity: 0,
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    show: {
        translateX: 0,
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
}

export const opacityT = {
    hidden: {
        translateY: -50,
        opacity: 0,
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    show: {
        translateY: 0,
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
}

export const opacityB = {
    hidden: {
        translateY: 50,
        opacity: 0,
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    show: {
        translateY: 0,
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
}

export const translateXRight = {
    hidden: {
        translateX: "0%",
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    show: {
        translateX: "120%",
        transition:{
            duration: 1,
            ease: "easeInOut",
        }
    },
}

export const translateYTop = {
    hidden: {
        translateY: "0%",
        transition:{
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    show: {
        translateY: "-120%",
        transition:{
            duration: 1,
            ease: "easeInOut",
        }
    },
}

const animations = {
    opacityB,
    opacityT,
    opacityR,
    opacityL,
    translateXRight,
    translateYTop
}


export default animations;