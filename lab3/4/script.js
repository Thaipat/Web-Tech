let check = true;
function validateForm(){
    let math = document.getElementById("Math");
    let math2 = document.getElementById("Math_hide")
    let thai = document.getElementById("Thai");
    let thai2 = document.getElementById("Thai_hide")
    let english = document.getElementById("English");
    let english2 = document.getElementById("English_hide")
    let science = document.getElementById("Science");
    let science2 = document.getElementById("Science_hide")
    let social = document.getElementById("Social");
    let social2 = document.getElementById("Social_hide")
    if (check){
        math.id = "Math_hide";
        thai.id = "Thai_hide";
        english.id = "English_hide";
        science.id = "Science_hide";
        social.id = "Social_hide";
        check = false;
    } else{
        math2.id = "Math";
        thai2.id = "Thai";
        english2.id = "English";
        science2.id = "Science";
        social2.id = "Social";
        check = true;
    }
}