// define submit button
let submitButton = document.getElementById("submit");
console.log(submitButton);

// define popUp
let popUpBox = document.getElementById("popUp");
console.log(popUpBox);

// define popUp BG
let bg = document.getElementById("popBG");
console.log(bg);

// define audio
let pop = document.getElementById("pop");
let click = document.getElementById("click");



let formInputs= document.querySelectorAll(".formInput");
var nameStr= document.getElementById("firstName").value;
let paragraph=document.getElementById("p");
let para=document.getElementById("p2");
let form = document.getElementById("form");





submitButton.addEventListener("click", function(e){
    e.preventDefault();
    _validateForm();

})

function _validateForm(){



    formInputs.forEach(thisElement => {
        //rejex checks
        let namePat = /^[a-zA-Z-']{2,}$/;
        let emailPat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            
        if(thisElement.value.trim() === ""){

            //if empty add styling
            thisElement.classList.add("isEmpty");
            thisElement.previousElementSibling.previousElementSibling.classList.add("labelIsWrong");
            thisElement.nextElementSibling.classList.add("errorAppear");

        }
        else{
            //check to see if it matches rejex
            //value exists but we have to check 
        
           if(namePat.test(formInputs[0].value.trim()) &&
              namePat.test(formInputs[1].value.trim()) && 
              emailPat.test(formInputs[2].value.trim()) &&
              namePat.test(formInputs[3].value.trim())){

                //If it matches then show pop up and remove any styling for empty inputs

                //removing classes
                thisElement.classList.remove("isEmpty");
                thisElement.previousElementSibling.previousElementSibling.classList.remove("labelIsWrong");
                thisElement.nextElementSibling.classList.remove("errorAppear");
                
                

                //show bg & play pop
                pop.play();

                //adding personal message including name and email
                let text = `Thank you ${formInputs[0].value.trim()} ${formInputs[1].value.trim()} for the message.`;
                let text2 = `You will hear from me soon on your email: ${formInputs[2].value.trim()}!`;

                //add it to HTML
                paragraph.innerHTML = text;
                para.innerHTML =text2;
                bg.style.display = "flex";

                //show popup bg
                setTimeout(function(){
                    bg.classList.add("appear");
                }, 100);

                // show pop
                setTimeout(function(){
                    popUpBox.classList.add("show");
                }, 700);

           }


           else{

            //while loop, if noot valid then reapply styling to show it is incorrect and to fix it 
            let start =0;
            let end=formInputs.length-1;

            //check entire array
            while(start<= end){
                if(start==0 || start==1|| start==3){
                    //if it is tested by namePat to retest
                    if(!namePat.test(formInputs[start].value.trim())){
                        formInputs[start].classList.add("isEmpty");
                        formInputs[start].previousElementSibling.previousElementSibling.classList.add("labelIsWrong");
                        formInputs[start].nextElementSibling.classList.add("errorAppear");    
                    }
                    //increase to check next elem
                    start++;
                }
                else{
                    //if tested by emailPat to retest is wrong 
                    if(!emailPat.test(formInputs[start].value.trim())){
                        formInputs[start].classList.add("isEmpty");
                        formInputs[start].previousElementSibling.previousElementSibling.classList.add("labelIsWrong");
                        formInputs[start].nextElementSibling.classList.add("errorAppear");
                    }
                    //increase to check next elem
                    start++;
                }
            }
            
                
               
                
           }
           

        }
    })
}

// Close button in popUp
let closeBut = document.getElementById("close");
    closeBut.addEventListener("click", function(){

        // remove display make it disappear

        
        bg.style.display="none";
        // remove appear class
        setTimeout(function(){
            bg.classList.remove("appear");
        }, 100);
        // remove show class to hide popUp
        setTimeout(function(){
            popUpBox.classList.remove("show");
        }, 700);

});

// textbox and label focus when highlighted
let textInput = document.querySelectorAll(".formInput");
textInput.forEach(thisInput => {
    thisInput.addEventListener("focus", function(){
        // finding element
        console.log(thisInput.previousElementSibling.previousElementSibling);
        // add class on focus
        thisInput.classList.add("isOnFocus");
        thisInput.previousElementSibling.previousElementSibling.classList.add("labelOnFocus");
    })
})

// remove style for textbox and label when not on focus
textInput.forEach(input => {
    input.addEventListener("blur", function(){
        input.classList.remove("isOnFocus");
        input.previousElementSibling.previousElementSibling.classList.remove("labelOnFocus");
    })
})

// validating

let formVal = document.getElementById("form");
let firstN= document.getElementById("firstName");


