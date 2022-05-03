

let barsBtn = document.querySelector(".header i.fa-bars");
let navMenu = document.querySelector(".header ul");
barsBtn.addEventListener("click", () => {
    barsBtn.classList.toggle("active");
    navMenu.classList.toggle("show");
});

window.onscroll = function () {
    barsBtn.classList.remove("active");
    navMenu.classList.remove("show");
}

