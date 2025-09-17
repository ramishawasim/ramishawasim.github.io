// header
let headerContent=`
        <a href="#"><img id="siteLogo" src="../assets/images/logoSite.png" alt="site logo"></a>
        <nav>
            <!-- navigation bar -->
            <a href="../index.html">About Me</a>
            <a href="../html/grid.html">Projects</a>
            
            <button onclick="document.location='../html/contact.html'" >Contact Me</button> </nav>`

let pageHeader = document.querySelector("header");
pageHeader.innerHTML = headerContent;

// burger
let burgerContent =`<section id="homeBurger" ><a href=""><h2 class="burger">Home</h2></a> <img class="arrow" src="../assets/images/arrow.png"></section>
        <section id="projectsBurger"><a href="../html/grid.html"><h2 class="burger">Projects</h2></a><img class="arrow" src="../assets/images/arrow.png"></section>
        <section id="aboutBurger"><a href="../index.html"><h2 class="burger">About Me</h2></a><img class="arrow" src="../assets/images/arrow.png"></section>
        <section id="contactBurger"><a href="../html/contact.html"><h2 class="burger">Contact Me</h2></a><img class="arrow" src="../assets/images/arrow-purple.png"></section>
        <section id="socials">
            <a href="https://www.linkedin.com/in/ramisha-wasim-35140a262/" target="_blank" class="logo linked"></a>
            <a href="https://ramishawasim.itch.io/" target="_blank" class="logo itch"></a>
            <a href="https://www.instagram.com/ramisha.w/" target="_blank" class="logo insta"></a>
        </section>`
let burgerMenu = document.getElementById("burgerMenu");
burgerMenu.innerHTML = burgerContent;

// seeing when burger menu is active
let active = false;

// defining aspects of the burger menu
let socials = document.getElementById("socials");
let burgerHead= document.querySelectorAll(".burger");
let arrow= document.querySelectorAll(".arrow");
let logoClick = document.getElementById("siteLogo");
let bodyP = document.querySelector("body");
let navi = document.querySelector("nav");

// on click of the burger menu
logoClick.addEventListener("click", function(){
    // if burger menu clicked and not active, then activate the menu from css
    if(active==false){
        // make it true that it is now active
        active=true;
        // make the logo rotate
        logoClick.classList.add("press");
        // make the burger body active
        bodyP.classList.add("active");
        // disble the nav in header
        navi.classList.add("disable");

        // active the menu sections on delay to animate across screen
        setTimeout(function(){
            burgerMenu.classList.add("activeBurg");
            // also activate the social icons
            socials.classList.add("active");
        }, 100);

        // activate the headers of each section
        setTimeout(function(){
            burgerHead.forEach(thisElement=>{
                console.log(thisElement);
                thisElement.classList.add("isActive");
            })
        }, 700);

        // activate the arrow images for each section
        setTimeout(function(){
            arrow.forEach(thisElement=>{
                console.log(thisElement);
                thisElement.classList.add("active");
               
            })
        }, 700);
        
    }

    // if the menu is active and the logo is clicked then turn off the burger menu
    else if(active==true){
        // make the boolean false
        active=false;
        // make the logo rotate back
        logoClick.classList.remove("press");
        // disable the burger menu
        bodyP.classList.remove("active");
        // re-enable the nav of the header
        navi.classList.remove("disable");

        // disable the sections in burger
        setTimeout(function(){
            burgerMenu.classList.remove("activeBurg");
            // remove the social icons at the bottom
            socials.classList.remove("active");
        }, 100);

        // remove the headers 
        setTimeout(function(){
            burgerHead.forEach(thisElement=>{
                console.log(thisElement);
                thisElement.classList.remove("isActive");
            })
        }, 700);

        // remove the arrow images
        setTimeout(function(){
            arrow.forEach(thisElement=>{
                console.log(thisElement);
                thisElement.classList.remove("active");
            })
        }, 700);
    }
})

// footer
let footerContent = 
        `<h2>Ramisha Wasim</h2>

        <!-- social media icons and links -->
        <section id="icons">
            <a href="https://www.linkedin.com/in/ramisha-wasim-35140a262/" target="_blank" class="logo linked"></a>
            <a href="https://ramishawasim.itch.io/" target="_blank" class="logo itch"></a>
            <a href="https://www.instagram.com/ramisha.w/" target="_blank" class="logo insta"></a>
        </section>
        <nav id="navi">
            <!-- navigation for footer -->
            <article>
                <h2>About Me</h2>
                <a href="../index.html#programs" class="nav exp">Programs</a> <br>
                <a href="../index.html" class="nav resume">Resume</a> <br>
                <a href="../index.html#hero" class="nav edu">Education</a> 
            </article>
            
            <article>
                <h2>Projects</h2>
                <a href="../html/grid.html" class="nav art">Art</a> <br>
                <a href="../html/grid.html#games" class="nav games">Games</a>
            </article>
            
        </nav>
        <a href="#"><img id="mobile" src="../assets/images/logo2.png"></a>`

let pageFooter = document.querySelector("footer");


pageFooter.innerHTML = footerContent;








