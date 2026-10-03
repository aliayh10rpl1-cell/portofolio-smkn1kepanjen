// ================
// MOBILE MENU
// ================
 const menuBtn = document.getElementById('menu-btn');
 const navMenu = document.getElementById('nav-menu');

 menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("active");
 });


 // ================
 // CLOSE MENU
 // ================
const navLinks = document.querySelectorAll('.navmenu a');
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});

// ====================
// SCROLL ANIMATION
// =====================

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } 

        });

    },
    {
        threshold: 0.15
    }
);  


sections.forEach(function(section) {
    observer.observe(section);

});

// =====================
// BUTTON EFFECT
// =====================

const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.style.transform = "scale(0.95)";
        setTimeout(function() {
            button.style.transform = "";

        }, 150);

    });
});


// ========================
// PROJECT LINK
// ========================

const projectButtons=
    document.querySelectorAll('.project-btn');

projectButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.style.transform = "scale(0.95)";
        setTimeout(function() {
            button.style.transform = "";

        }, 150);
    });
});