let all_members_page = document.getElementById("all-members-page");
let member_btns = document.querySelectorAll(".member-btn");

member_btns.forEach(btn => {

    btn.addEventListener("click", function () {
        member_btns.forEach(b => {
            b.style.backgroundColor = "";
            b.style.color = "";
        });
        
        this.style.backgroundColor = "#008498ff";
        this.style.color = "#ffffffff";
        
        all_members_page.style.display = "flex";
        setTimeout(() => {
            all_members_page.style.opacity = "1";
        }, 10);
        setTimeout(() => {
            let main = document.getElementById("main")
            main.style.display="none"
        }, 480);
        if (main.style.display === "none") {
            console.log("main is \"none\"")
        }
        setTimeout(() => {
            all_members_page.style.backgroundColor= "#00000020";
        }, 500);

// sidebar ----------------------------------------
    if (bars.style.display === "none") {
        bars.style.display = "block";
        x_mark.style.display = "none";
        side.style.left = "-100vw";
    } 
// sidebar ----------------------------------------


    });

});