
// get main div element
const divMain = document.querySelector("#main");

// get user agent to detect mobile device
const uAgent = navigator.userAgent;
// console.log("uAgent: ", uAgent);

const regExp = /android|iphone|ipad/i;
const isMobile = regExp.test(uAgent);

// set css class for mobile devices
if(isMobile) {
    // console.log("mobile device!")
    divMain.classList.add("mobile");
} else {
    // console.log("desktop!");
}

// set text depending on the type of device
const pLabel = document.querySelector("#label");
pLabel.innerHTML = isMobile ? "Complete your"+"<br/>"+"dog look" : "You might find those interesting"

// get element with all the cards
const divCards = document.querySelector("#cards");

// get element that includes the slider
const divSliderWrapper = document.querySelector("#slider-wrapper");

// if mobile device show slider and update its position
if(isMobile) {
    // set slider wapper visible
    divSliderWrapper.classList.remove("hidden");
    const clientWidth = divCards.clientWidth;
    const scrollWidth = divCards.scrollWidth;
    // console.log("width: ", {clientWidth, scrollWidth});

    // set slider size
    sliderSize = (( clientWidth / scrollWidth ) *100).toFixed(2)
    // console.log("sliderSize: ", sliderSize);

    const slider = document.querySelector("#slider");
    // console.log("slider:",slider);
    slider.style.width = `${sliderSize}%`;

    // get slider area (available space for the slider)
    const sliderArea = document.querySelector("#slider-area");
    // console.log("sliderArea:",sliderArea);
    sliderAreaRect = sliderArea.getBoundingClientRect();
    // console.log("sliderAreaRect:",sliderAreaRect);
    

    // add eventlistener fot the cards container
    divCards.addEventListener("touchmove", (e) => {
            // get the amount of pixels scrolled
            const left = divCards.scrollLeft;
            // console.log("left: ", left);
            
            // calculate the movement compared to the whole cards container (in percentage)
            movePercentage = (Math.floor((left / divCards.scrollWidth) * 10000))/100;

            // the the slider position
            slider.style.marginLeft = `${movePercentage}%`;
    });
}


