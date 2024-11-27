var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Web Wizard"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const homeLink = document.getElementById("home-link");
homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo(0, 0); // Scroll to the top of the page
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    function handleScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                el.style.animation = el.dataset.animation + " 1s ease forwards";
            }
        });
    }

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();
});

