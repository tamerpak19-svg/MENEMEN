/* =========================================================
   KOR MENEMEN
   JAVASCRIPT
========================================================= */


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


mobileButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Mobile menü linkine basınca kapat */

const mobileLinks =
    mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".menu-card, .review, .story-content, .gallery-item"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, 100);

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   MENU BUTTON INTERACTION
========================================================= */

const menuButtons =
    document.querySelectorAll(".menu-bottom button");


menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "✓";

        button.style.background = "#c75b2a";

        button.style.color = "#fff";

        button.style.borderColor = "#c75b2a";

        setTimeout(() => {

            button.innerHTML = "+";

            button.style.background = "";

            button.style.color = "";

            button.style.borderColor = "";

        }, 1200);

    });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================================
   PARALLAX HERO
========================================================= */

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;

    const scroll =
        window.scrollY;

    if (scroll < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scroll * 0.35}px`;

    }

});
