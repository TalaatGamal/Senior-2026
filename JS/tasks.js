
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



















let all_members_page = document.getElementById("all-members-page");
let member_btns = document.querySelectorAll(".member-btn");
let imga_2 = document.getElementById("imga-2")


member_btns.forEach(btn => {

    btn.addEventListener("click", function () {
        member_btns.forEach(b => {
            b.style.backgroundColor = "";
            b.style.color = "";

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


    }});
        
        this.style.backgroundColor = "#008498ff";
        this.style.color = "#ffffffff";
        
        all_members_page.style.display = "flex";
        setTimeout(() => {
            all_members_page.style.opacity = "1";
        }, 10);
        setTimeout(() => {
            let main = document.getElementById("main")
            main.style.display="none"
        }, 250);
        if (main.style.display === "none") {
            console.log("main is \"none\"")
        }
        setTimeout(() => {
            all_members_page.style.backgroundColor= "#00000020";
        }, 250);
        
        
        setTimeout(() => {
        imga_2.style.opacity="0"
        }, 3000);
        setTimeout(() => {
            imga_2.style.display="none"
        }, 4000);

// sidebar ----------------------------------------
    if (bars.style.display === "none") {
        bars.style.display = "block";
        x_mark.style.display = "none";
        side.style.left = "-100vw";
    } 
// sidebar ----------------------------------------


    });

});





