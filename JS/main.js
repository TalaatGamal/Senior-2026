
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







let tasksBtn = document.getElementById("tasksBtn");
let studentsList = document.getElementById("studentsList");

tasksBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (studentsList.style.display === "flex") {
        studentsList.style.opacity = "0";
        studentsList.style.height="0px";
            studentsList.style.paddingTop="0px"
            studentsList.style.paddingRight="0px"
            studentsList.style.paddingBottom="0px"
            studentsList.style.paddingLeft="0px"
        setTimeout(() => {
            studentsList.style.display = "none";
        }, 500);
    } else {
        studentsList.style.display = "flex";
        studentsList.style.height="0px";
        setTimeout(() => {
            studentsList.style.opacity = "1";
            studentsList.style.height="550px";
            studentsList.style.paddingTop="30px"
            studentsList.style.paddingRight="20px"
            studentsList.style.paddingBottom="30px"
            studentsList.style.paddingLeft="20px"
        }, 10);
        // studentsList.style.height="max-content";
    }
});
