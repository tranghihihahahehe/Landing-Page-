// DARK MODE
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// CURSOR FOLLOW
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
