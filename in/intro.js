
const body = document.getElementById("body")
const intro = document.getElementById("intro")
const nn_cover = document.getElementById("nn-cover")
const nn_cover2 = document.getElementById("nn-cover2")
const en_btn = document.getElementById("en")
const ar_btn = document.getElementById("ar")



document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(() => {
        nn_cover.style.width="100%"
        nn_cover2.style.opacity="1"
    }, 400);
    
});

    en_btn.addEventListener("click", ()=> {
        
        intro.style.opacity="0"
        setTimeout(() => {
            intro.style.display="none"
            body.style.overflowY="scroll"
        }, 1000);
        
    });
    

    ar_btn.addEventListener("click", () => {
        
        intro.style.opacity="0"
        setTimeout(() => {
            intro.style.display="none"
            body.style.overflowY="scroll"
        }, 1000);
        translateToArabic();
        
    });

function translateToArabic() {
    document.querySelectorAll("nav ul li a")[0].innerHTML = 'الرئيسية <i class="fa-solid fa-house"></i>';
    document.querySelectorAll("nav ul li a")[1].innerHTML = 'تقرير <i class="fa-solid fa-magnifying-glass-chart"></i>';
    document.querySelectorAll("nav ul li a")[2].innerHTML = 'أدوار الفريق <i class="fa-solid fa-person-circle-check"></i>';
    document.querySelectorAll("nav ul li a")[3].innerHTML = 'نظرة عامة <i class="fa-solid fa-arrows-to-eye"></i>';
    document.querySelectorAll("nav ul li a")[4].innerHTML = 'المطور <i class="fa-solid fa-code"></i>';
}