
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", (e) => {
    e.preventDefault();
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});
navClose.addEventListener("click", (e) => {
    e.preventDefault();
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

//  fix nav bar
const navFix = navBar.getBoundingClientRect().height;
const link = document.querySelector(".rmv-link")
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    if (scrollHeight > navFix) {
        navBar.classList.add("fix-nav");
        link.classList.add("remove1-link")
    }
    else {
        navBar.classList.remove("fix-nav");
        link.classList.remove("remove1-link")
    }
})

// ...........
const links = [...document.querySelectorAll(".scroll-link")];

links.map(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        let position = el.offsetTop - navFix;

        window.scrollTo({
            top: position,
            left: 0,
        });
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    });
});

// ..........

// time messagge whish show in contact ............................

window.addEventListener('load', myyfunc);
function myyfunc() {
    var msg;
    var time = new Date().getHours();
    if (time < 12) {
        msg = new TypeIt("#time", {
            speed: 50,
            loop: true,
            waitUntilVisible: true
            // startDelay: 900
        })
            .type('<em><strong>Hii, </strong></em>', { delay: 200 })
            .type(" Morning", { delay: 200 })
            .move(-10, { speed: 25, delay: 200 })
            .type('Good')
            .move('START')
            .go();

    }
    else if (time < 20) {
        msg = new TypeIt("#time", {
            speed: 50,
            loop: true,
            waitUntilVisible: true
            // startDelay: 900
        })
            .type('<em><strong>Hii, </strong></em>', { delay: 200 })
            .type(" AfterNoon", { delay: 200 })
            .move(-10, { speed: 25, delay: 200 })
            .type('Good')
            .move('START')
            .go();
    }
    else {
        msg = new TypeIt("#time", {
            speed: 50,
            loop: true,
            waitUntilVisible: true
            // startDelay: 900
        })
            .type('<em><strong>Hii, </strong></em>', { delay: 200 })
            .type(" Evning", { delay: 200 })
            .move(-10, { speed: 25, delay: 200 })
            .type('Good')
            .move('START')
            .go();
    }
    document.getElementById("time").innerHTML = "", msg;
};


// ....form...................................
function myFunction() {
    document.getElementById("myForm").submit();
}
// ....................................................................



// darkmode ...................

// const btn2 = document.querySelector("#sbmit-btn");
const dark = document.querySelector("#dark1");
dark.addEventListener("click", () => {
    document.body.classList.add("dark");
});

const light = document.getElementById("light");
light.addEventListener("click", () => {
    document.body.classList.remove("dark");
});
// ...................

AOS.init();
// ..............
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hambrger", { opacity: 0, duration: 1, delay: 1, y: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", {
    opacity: 0,
    duration: 1,
    delay: 1.2,
    y: 30,
    stagger: 0.2,
});
gsap.from(".icons span", {
    opacity: 0,
    duration: 1,
    delay: 4,
    y: -30,
    stagger: 0.2,
});
// ........................
// typeit text display.........................

new TypeIt("#type2", {
    speed: 50,
    loop: true,
    waitUntilVisible: true
    // startDelay: 900
})
    .type("Web Developer", { delay: 200 })
    .move(-14, { speed: 25, delay: 200 })
    .type('Stack')
    .move('START')
    .move(-1, { delay: 300 })
    // .delete(10)
    .type('<em><strong> Full </strong></em>')
    .go();

new TypeIt("#type", {
    speed: 100,
    loop: true,
    waitUntilVisible: true
})
    .type("Web Designer", { delay: 600 })
    .pause(1)
    .delete(9)
    .type(' Developer', { delay: 700 })
    .pause(1)
    .delete(9)
    .go();

    const showSet= document.querySelector(".open");
    const set= document.querySelector(".seting");
    const seting = document.querySelector("#seting-icon");
    seting.addEventListener("click", () => {
     showSet.classList.add("show-seting");
    });
    set.addEventListener('mouseleave', () =>{
        showSet.classList.remove("show-seting");
         });
     