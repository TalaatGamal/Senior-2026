// const side = document.getElementById("side");
// const icon = document.getElementById("icon");
// const bars = document.getElementById("bars");
// const x_mark = document.getElementById("x-mark");

// icon.addEventListener("click", () => {
//     if (bars.style.display === "none") {
//         bars.style.display = "block";
//         x_mark.style.display = "none";
//         side.style.left = "-100vw";
//     } else {
//         bars.style.display = "none";
//         x_mark.style.display = "block";
//         side.style.left = "0vw";
//     }
// });

// side.addEventListener("click", () => {
//     if (side.style.left === "0vw") {
//         side.style.left = "-100vw";
//         bars.style.display = "block";
//         x_mark.style.display = "none";
//     }
// });

const side = document.getElementById("side");
const icon = document.getElementById("icon");
const bars = document.getElementById("bars");
const x_mark = document.getElementById("x-mark");

icon.addEventListener("click", () => {
    if (bars.style.display === "none") {
        bars.style.display = "block";
        x_mark.style.display = "none";
        side.style.left = "-100vw";
    } else {
        bars.style.display = "none";
        x_mark.style.display = "block";
        side.style.left = "0vw";
    }
});

side.addEventListener("click", (e) => {
    const sideWidth = side.offsetWidth;
    const clickX = e.offsetX;
    const limit = sideWidth * 0.7;

    if (side.style.left === "0vw" && clickX > limit) {
        side.style.left = "-100vw";
        bars.style.display = "block";
        x_mark.style.display = "none";
    }
});
