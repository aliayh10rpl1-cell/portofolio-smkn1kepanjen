
// MENU RESPONSIVE
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// TUTUP MENU SAAT LINK DIKLIK
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// ANIMASI SAAT SCROLL
const animatedElements = document.querySelectorAll(
    ".hero-content, .hero-card, .section-title, " +
    ".photo-frame, .paper, .portofolio-card, .contact-item"
);

animatedElements.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(function (element) {
    observer.observe(element);
});

// EFEK KLIK KARTU PROYEK
const projectCards = document.querySelectorAll(".portofolio-card");

projectCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.classList.add("card-active");
    });

    card.addEventListener("mouseleave", function () {
        card.classList.remove("card-active");
    });
});

// TAHUN FOOTER OTOMATIS
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent = footerText.textContent.replace(
        /2026/g,
        new Date().getFullYear()
    );
}

// TOMBOL KEMBALI KE ATAS
const backToTop = document.createElement("button");

backToTop.className = "back-to-top";
backToTop.textContent = "↑";
backToTop.setAttribute("aria-label", "Kembali ke atas");

document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
    backToTop.classList.toggle("show", window.scrollY > 350);
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
