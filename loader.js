window.addEventListener("load", function () {
const loader = document.getElementById("loader");
loader.style.opacity = 1;

  // Efecto de desvanecimiento
const fadeOut = setInterval(() => {
    if (loader.style.opacity > 0) {
        loader.style.opacity -= 0.05;
    } else {
        clearInterval(fadeOut);
        loader.style.display = "none";
    }
}, 30);
});