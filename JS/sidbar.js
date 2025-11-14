
const side = document.getElementById("side");
const icon = document.getElementById("icon");
const bars = document.getElementById("bars");
const x_mark = document.getElementById("x-mark");

icon.addEventListener("click", () => {
    if (bars.style.display === "none") {
        bars.style.display = "block";
        x_mark.style.display = "none";
        // side.style.right="-100vw"
        side.style.left="-70vw"
    } else {
        bars.style.display = "none";
        x_mark.style.display = "block";
        // side.style.right="0vw"
        side.style.left="0vw"
    }
});
