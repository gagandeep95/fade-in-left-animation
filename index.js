const wrapper = document.querySelector("#wrapper");
const fadeInLeft = document.querySelector("#fadeInLeft");
const fadeOutLeft = document.querySelector("#fadeOutLeft");


function fadeOut(){
    wrapper.classList.remove("fadeInLeft");
    wrapper.classList.add("fadeOutLeft");
}


function fadeIn(){
    wrapper.classList.remove("fadeOutLeft");
    wrapper.classList.add("fadeInLeft");
}


// THIS EVENT WILL TRIGGER WHEN FADE-IN-LEFT BUTTON CLICK

fadeInLeft.addEventListener("click", fadeIn);

// THIS EVENT WILL TRIGGER WHEN FADE-OUT-LEFT BUTTON CLICK
fadeOutLeft.addEventListener("click", fadeOut);



