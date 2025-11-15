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













let tasksBtn2 = document.getElementById("tasksBtn2");
let studentsList2 = document.getElementById("studentsList2");
let back_btn = document.getElementById("back-btn");

tasksBtn2.addEventListener("click", function (e) {
    e.preventDefault();

    if (studentsList2.style.display === "flex") {
        studentsList2.style.opacity = "0";
        studentsList2.style.height="0px";
        setTimeout(() => {
            studentsList2.style.display = "none";
        }, 500);
    } else {
        studentsList2.style.display = "flex";
        studentsList2.style.height="0px";
            studentsList2.style.paddingRight="20px"
            studentsList2.style.paddingBottom="150px"
            studentsList2.style.paddingTop="20px"
            studentsList2.style.paddingLeft="20px"
        setTimeout(() => {
            studentsList2.style.opacity = "1";
            studentsList2.style.height="690px";
        }, 100);
        // studentsList.style.height="max-content";
    }
});
back_btn.addEventListener("click", function (e2) {
    e2.preventDefault();




    if (studentsList2.style.display === "flex") {
        studentsList2.style.opacity = "0";
        studentsList2.style.height="0px";
        setTimeout(() => {
            studentsList2.style.display = "none";
        }, 500);
    } else {
        studentsList2.style.display = "flex";
        studentsList2.style.height="0px";
            studentsList2.style.paddingRight="20px"
            studentsList2.style.paddingBottom="50px"
            studentsList2.style.paddingTop="20px"
            studentsList2.style.paddingLeft="20px"
        setTimeout(() => {
            studentsList2.style.opacity = "1";
            studentsList2.style.height="690px";
        }, 100);
        // studentsList.style.height="max-content";
    }




});


