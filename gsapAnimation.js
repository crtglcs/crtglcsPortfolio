const tl = gsap.timeline();

tl.fromTo('.logoHeader', {
    opacity: 0,
    x: -200,

},{
    opacity: 1,
    x: 0,
    duration: 1,
})

tl.fromTo('.lighter', {
    opacity: 0,
},{
    opacity: 1,
    duration: 3,
},"<")

tl.fromTo('.bolder', {
    opacity: 0,
},{
    opacity: 1,
    duration: 3,
},"<")

const elements = document.querySelectorAll('.mainNavSideBar__list > li');

const sideBarAnim = gsap.timeline();

// Ajouter des animations pour chaque enfant
elements.forEach((element) => {
    // Ajouter une animation à la timeline pour chaque élément
    sideBarAnim.fromTo(element, {
        opacity: 0,
        x: -200,
    }, {
        opacity: 1,
        x: 0,
        duration: 2,
        delay: -1.5,
    });
});

const footerAnim = gsap.timeline();

footerAnim.fromTo('.footer__separationLine', {
    width: 0,
    x: "-50%",
}, {
    width: "100%",
    opacity: 0.5,
    x: 0,
    duration: 3,
})


/*
const projects = document.querySelectorAll('.carousel__item');

const workAnim = gsap.timeline();

// Ajouter des animations pour chaque enfant
projects.forEach((element) => {
    // Ajouter une animation à la timeline pour chaque élément
    workAnim.fromTo(element, {
        opacity: 0,
        y: -200,
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: -0.5,
    });
});

*/