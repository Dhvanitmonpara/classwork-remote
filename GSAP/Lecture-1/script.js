// gsap.from('.red-div', {
//     opacity: 0, 
//     duration: 3,
//     backgroundColor: 'green', // bcz of string
// })

const tl = gsap.timeline()

tl.from('.nav-bar', {
    opacity: 0,
    y: 20,
    duration: 0.9,
    scale: 1.15,
    delay: 1
})
.from('.sub-nav-bar', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    scale: 1.15
})
.from(['.right-div', '.left-div'], {
    opacity: 0,
    duration: 0.7,
    scale: 1.05,
    delay: -0.5
})
.from(['.right-items', '.left-items'], {
    opacity: 0,
    duration: 0.5,
    scale: 0.2,
    delay: 0.1
})
.from('.yoyo-hora-bhai', {
    scale: 0.1,
    opacity: 0,
})
.to('.yoyo-hora-bhai', {
    y: 30,
    repeat: -1,
    yoyo: true
})
.to('.nav-bar', {
    y: -100,
    delay: 2
})
.to('.sub-nav-bar', {
    y: -100,
})