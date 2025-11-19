
let air = document.getElementById("air");
let air2 = document.getElementById("air2");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 600) {
        air.style.display = "none";
        air2.style.display = "none";
        console.log("air & ai2 = none")
    } else {
        air.style.display = "block";
        air2.style.display = "block";
        console.log("air & ai2 = block")
    }
});





