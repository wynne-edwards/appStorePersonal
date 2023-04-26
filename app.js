var tvButton = document.getElementById("TV"); //Get Buttons
var pcButton = document.getElementById("PC");
var tabletButton = document.getElementById("Tablet");
var phoneButton = document.getElementById("Phone");
var idValArray1 = ["TVButton", "PCButton", "tabletButton", "phoneButton"]; //Array if possible button labels
var idValArray2 = ["freeText", "grossingText", "paidText"]; //Array of possible test labels
function tvPressed() { //Just sorters that identify which button was pressed
    resClicked(tvButton)
}
function pcPressed() {
    resClicked(pcButton)
}
function tabletPressed() {
    resClicked(tabletButton)
}
function phonePressed() {
    resClicked(phoneButton)
}
function resClicked(buttonPressed) { //Assign idVal1 depending on the button pressed
    var idVal1 = "";
    if (buttonPressed == tvButton) {
        idVal1 = "TVButton";
    } else if (buttonPressed == pcButton) {
        idVal1 = "PCButton";
    } else if (buttonPressed == tabletButton) {
        idVal1 = "tabletButton";
    } else if (buttonPressed == phoneButton){
        idVal1 = "phoneButton";
    }
    var elements = document.getElementsByClassName("resButtons"); //Get all buttons with class of resButtons
    buttonPressed.style.background = "rgba(255, 137, 102, 0.6)"; //Change button pressed background and colour of text
    document.getElementById(idVal1).style.color = "#A3320B";
    buttonPressed.style.borderWidth = "0";
    for (let z = 0; z < elements.length; z++) { //All other buttons change their background to match, thus giving the effect of selecting a button
        if (elements[z] != buttonPressed) {
            elements[z].style.background = "white";
            elements[z].style.borderWidth = "1px";
        } 
    }
    for (let i = 0; i < idValArray1.length; i++) {
        if (idValArray1[i] != idVal1) {
            document.getElementById(idValArray1[i]).style.color = "#706C61"; //Find the button we pressed and change its text colour
        }
    }
}
var freeButton = document.getElementById("freeChart"); //Same effect as above code but for different buttons
var grossButton = document.getElementById("grossingChart");
var paidButton = document.getElementById("paidChart");
function freePressed() {
    chartClicked(freeButton)
}
function grossingPressed() {
    chartClicked(grossButton)
}
function paidPressed() {
    chartClicked(paidButton)
}

function chartClicked(buttonPressed) {
    var idVal2 = "";
    if (buttonPressed == freeButton) {
        idVal2 = "freeText";
    } else if (buttonPressed == grossButton) {
        idVal2 = "grossingText";
    } else if (buttonPressed == paidButton){
        idVal2 = "paidText";
    }
    var elements2 = document.getElementsByClassName("chartButtons");
    buttonPressed.style.background = "rgba(255, 137, 102, 0.6)";
    document.getElementById(idVal2).style.color = "#A3320B";
    buttonPressed.style.borderWidth = "0";
    for (let z = 0; z < elements2.length; z++) {
        if (elements2[z] != buttonPressed) {
            elements2[z].style.background = "white";
            elements2[z].style.borderWidth = "1px";
        } 
    }
    for (let i = 0; i < idValArray2.length; i++) {
        if (idValArray2[i] != idVal2) {
            document.getElementById(idValArray2[i]).style.color = "#706C61";
        }
    }

}

//Hard coded for displaying popup depending on button pressed, clunky I know but I was throwing this together quickly
document.getElementById("popup-exit1").addEventListener("click", function() { document.getElementById("levelUpMerch").style.display = "none";});
document.getElementById("popup-exit2").addEventListener("click", function() { document.getElementById("emeraldConsulting").style.display = "none";});
document.getElementById("popup-exit3").addEventListener("click", function() { document.getElementById("scrimBot").style.display = "none";});
document.getElementById("popup-exit4").addEventListener("click", function() { document.getElementById("personalCVPage").style.display = "none";});
document.getElementById("popup-exit5").addEventListener("click", function() { document.getElementById("noticePopup").style.display = "none";});

document.getElementById("grid1").addEventListener("click", function() { document.getElementById("levelUpMerch").style.display = "block";});
document.getElementById("grid2").addEventListener("click", function() { document.getElementById("emeraldConsulting").style.display = "block";});
document.getElementById("grid3").addEventListener("click", function() { document.getElementById("scrimBot").style.display = "block";});
document.getElementById("grid4").addEventListener("click", function() { document.getElementById("personalCVPage").style.display = "block";});

//SRC CODE:  https://www.youtube.com/watch?v=gphMli74Chk
const scrollBtn = document.querySelector("#cvId");
scrollBtn.addEventListener("click", transitionToCV); //Add a listener to check if a button is pressed
function transitionToCV(){ //If pressed play animation of scrolling to top of page then go to next page
    smoothScrollBackToTop()
    setTimeout(function(){
        window.location.href = "cv.html";
    }, 725);
    
}
function smoothScrollBackToTop() { //Smooth scroll to top of page
    const targetPosition = 0; //Position we are at
    const startPosition = window.pageYOffset; //Top of page
    const distance = targetPosition - startPosition; //Distance from top to us
    const duration = 750;
    let start = null;
    
    window.requestAnimationFrame(step);
  
    function step(timestamp) { //Play animation
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }
  function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};