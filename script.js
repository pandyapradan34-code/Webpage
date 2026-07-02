//========================================
// STAMBH DESIGN STUDIO
// Main JavaScript
//========================================


//==============================
// Sticky Header
//==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


//==============================
// Mobile Navigation
//==============================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (menuBtn.innerHTML.includes("bars")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


//==============================
// Close Menu After Click
//==============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


//==============================
// Smooth Scroll
//==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


//==============================
// Reveal Animation
//==============================

const revealElements = document.querySelectorAll(
    ".about, .services, .stats, .featured, .cta"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(70px)";

    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


//==============================
// Animated Counter
//==============================

const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.innerText.replace("+","");

        const current = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 80);

        if(current < target){

            counter.setAttribute("data-count", current + increment);

            counter.innerText = current + increment + "+";

            setTimeout(updateCounter,25);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});


//==============================
// Active Navigation
//==============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});


//==============================
// Hero Fade Effect
//==============================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-content");

    if(hero){

        hero.style.opacity = 1 - window.scrollY / 700;

    }

});


//==============================
// Console Message
//==============================

console.log(
"%cStambh Design Studio",
"font-size:22px;color:#C7A66A;font-weight:bold;"
);

console.log(
"%cDesigned & Developed by Pradan Pandya",
"font-size:14px;color:#10253F;"
);