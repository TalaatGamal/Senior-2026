
const icon = document.getElementById("icon");
const bars = document.getElementById("bars");
const x_mark = document.getElementById("x-mark");

icon.addEventListener("click", () => {
    if (bars.style.display === "none") {
        bars.style.display = "block";
        x_mark.style.display = "none";
    } else {
        bars.style.display = "none";
        x_mark.style.display = "block";
    }
});
