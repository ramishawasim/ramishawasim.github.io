let meImage = document.getElementById("me");
let stickyImage = document.getElementById("sticky");

window.addEventListener("load", function(){
    this.setTimeout(function(){
        meImage.classList.add("fadeIn");
    }, 200)
    this.setTimeout(function(){
        stickyImage.classList.add("fadeIn");
    }, 200)
})

let progSection = document.getElementById("prog");
let serSection = document.getElementById("ser");
let eduSection = document.getElementById("edu");

window.addEventListener("scroll", function(){
    let topOfProg = progSection.getBoundingClientRect().top;
    let topOfSer = serSection.getBoundingClientRect().top;
    let topOfEdu = eduSection.getBoundingClientRect().top;

    let windowHeight = window.innerHeight;
    let threshold = windowHeight*0.8;

    //top of Progress Section
    if(topOfProg<=threshold){
        //add the fade in
        progSection.classList.add("fadeUp");
    }
    else{
        progSection.classList.remove("fadeUp");
        //remove the fade in
    }

    //top of Service Section
    if(topOfSer<=threshold){
        //add the fade in
        serSection.classList.add("fadeUp");
    }
    else{
        serSection.classList.remove("fadeUp");
        //remove the fade in
    }

    //top of education section
    if(topOfEdu<=threshold){
        //add the fade in
        eduSection.classList.add("fadeUp");
    }
    else{
        eduSection.classList.remove("fadeUp");
        //remove the fade in
    }

})