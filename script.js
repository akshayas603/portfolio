/* =====================================
        TYPING EFFECT
===================================== */

const typingText = document.querySelector(".typing");

const words = [
    "Java Developer",
    "Software Developer",
    "Frontend Developer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, letterIndex++);
    } else {

        typingText.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = deleting ? 70 : 120;

    if (!deleting && letterIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    } else if (deleting && letterIndex === 0) {

        deleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;
        }
    }

    setTimeout(typingEffect, speed);
}

typingEffect();


/* =====================================
        ACTIVE NAVIGATION
===================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =====================================
        SMOOTH SCROLL
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* =====================================
        NAVBAR SHADOW
===================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }

});


/* =====================================
        SCROLL ANIMATION
===================================== */

const cards = document.querySelectorAll(
    ".project-card, .education-card, .timeline-item, .skill-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

    observer.observe(card);

});


/* =====================================
        BACK TO TOP BUTTON
===================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#1e3a5f";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});