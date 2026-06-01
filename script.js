// ================= TYPING EFFECT =================

var typed = new Typed("#typing", {

strings: [

"Data Analyst",
"Power BI Developer",
"SQL Developer",
"Python Enthusiast"

],

typeSpeed: 60,
backSpeed: 40,
loop: true

});


// ================= NAVBAR SHADOW ON SCROLL =================

window.addEventListener("scroll", function () {

const navbar = document.querySelector(".navbar");

navbar.classList.toggle("scrolled", window.scrollY > 50);

});


// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if (pageYOffset >= sectionTop - 200) {

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


// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(".glass");

window.addEventListener("scroll", () => {

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

const windowHeight = window.innerHeight;

if (cardTop < windowHeight - 100) {

card.classList.add("show");

}

});

});


// ================= CONSOLE MESSAGE =================

console.log("Sachin Kumar Portfolio Loaded Successfully 🚀");