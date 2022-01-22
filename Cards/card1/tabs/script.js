const januaryBtn = document.querySelector("#january");
const juneBtn = document.querySelector("#june");
const augBtn = document.querySelector("#aug");
const octBtn= document.querySelector("#october");
const allDivs = document.querySelectorAll(".details");

januaryBtn.addEventListener( "click",() => {
    // console.log("clicked");
   let janDiv = allDivs[0];
        janDiv.style.display = "block";
   
})


juneBtn.addEventListener( "click",() => {
    console.log("clicked");
   let juneDiv = allDivs[1];
   juneDiv.style.display = "block";
})
augBtn.addEventListener( "click",() => {
    // console.log("clicked");
   let augustDiv = allDivs[2];
   augustDiv.style.display = "block";
})
octBtn.addEventListener( "click",() => {
    // console.log("clicked");
   let octDiv = allDivs[3];
   octDiv.style.display = "block";
})