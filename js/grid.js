
//for the first gallery on the page(art)
let galleryItems = document.querySelectorAll(".galleryItem");

galleryItems.forEach(thisItem => {
    thisItem.addEventListener("mouseenter", function(){
        //change the style for the image of the item
        //chagne teh style of the h2 of the item
        thisItem.classList.add("active");
    });
})

galleryItems.forEach(thisItem => {
    thisItem.addEventListener("mouseleave", function(){
        thisItem.classList.remove("active");
    });
})

let gameItems = document.querySelectorAll(".gameItem");

//for the game gallery
gameItems.forEach(thisItem => {
    thisItem.addEventListener("mouseenter", function(){
        //change the style for the image of the item
        //chagne teh style of the h2 of the item
        thisItem.classList.add("active");
    });
})

gameItems.forEach(thisItem => {
    thisItem.addEventListener("mouseleave", function(){
        thisItem.classList.remove("active");
    });
})