// Wait for page to load completely
document.addEventListener('DOMContentLoaded', function () {

    // Menu page code (only if elements exist)
    if (document.getElementById("btnCoffee")) {
        document.getElementById("btnCoffee").onclick = () => {
            document.getElementById("coffee").scrollIntoView({ behavior: "smooth" });
        };
    }

    if (document.getElementById("btnTea")) {
        document.getElementById("btnTea").onclick = () => {
            document.getElementById("tea").scrollIntoView({ behavior: "smooth" });
        };
    }

    if (document.getElementById("btnFood")) {
        document.getElementById("btnFood").onclick = () => {
            document.getElementById("food").scrollIntoView({ behavior: "smooth" });
        };
    }

    if (document.getElementById("btnDesserts")) {
        document.getElementById("btnDesserts").onclick = () => {
            document.getElementById("desserts").scrollIntoView({ behavior: "smooth" });
        };
    }

    // Scroll button code (only if elements exist)
    const scrollBtn = document.getElementById('scrollToggle');
    const scrollIcon = document.getElementById('scrollIcon');

    if (scrollBtn && scrollIcon) {
        scrollBtn.addEventListener('click', function () {
            if (scrollIcon.classList.contains('fa-arrow-up')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
        });

        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                scrollIcon.className = 'fas fa-arrow-up';
            } else {
                scrollIcon.className = 'fas fa-arrow-down';
            }
        });
    }
});