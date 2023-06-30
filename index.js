const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuItems.classList.add("active");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuItems.classList.remove("active");
        menuOpen = false;
    }
});