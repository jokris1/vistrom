const carousel = {
    prepareCarousel() {
        const carouselImages = document.querySelectorAll(".product-img");
        const carouselDots = document.querySelectorAll(".dot");
        const carouselInfo = document.querySelectorAll(".product-info");

        // DOTS
        carouselDots.forEach( 
            function(dot, i) {
                // highlight the first dot
                    if (i === 0) {
                        dot.classList.add("current-dot")
                        // display first img and info
                        carouselImages[i].classList.add("showProduct");
                        carouselInfo[i].classList.add("showProduct");
                    }
                    // add clicker to each dot
                    dot.addEventListener("click", carousel.clickedDot);
            }
        )
    },

    clickedDot(e) {
        const { target } = e;
        const carouselDots = document.querySelectorAll(".dot")
        let nr = -1; // find correct nr of dot (1-3) below
        console.log(target)

        // remove previous filled dot
        carouselDots.forEach( 
            function(dot, i) {
                nr = i+1;
                // if clicked target equals iteration, display product
                if (target === dot) {
                    console.log(dot)
                    // add dot
                    dot.classList.add("current-dot")

                    // switch image
                    let currentImg = document.getElementsByClassName(`product${nr}-img`)[0]
                    currentImg.classList.add("showProduct")

                    // switch info
                    let currentInfo = document.getElementsByClassName(`product${nr}-info`)[0]
                    currentInfo.classList.add("showProduct")
                // else remove dot and display: none
                } else {
                    dot.classList.remove("current-dot");

                    // hide previous image
                    let prevImg = document.getElementsByClassName(`product${nr}-img`)[0]
                    prevImg.classList.remove("showProduct");

                    // hide previous product info
                    let prevInfo = document.getElementsByClassName(`product${nr}-info`)[0]
                    prevInfo.classList.remove("showProduct");

                }
        })


    }

}

export default carousel;