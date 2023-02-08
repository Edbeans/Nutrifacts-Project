export const Slider = {

    slideAction(macroName, nextBtn, prevBtn) {
        // Selecting all slides 
        const slides = document.querySelectorAll(macroName); 
        
        slides.forEach((slide, idx) => {
            slide.style.transform = `translateX(${idx * 100}%)`;
        });
        
        // set current slide to 0 
        // select next slide btn 
        // set a last slide variable 
        const nextSlide = document.querySelector(nextBtn); 
        const prevSlide = document.querySelector(prevBtn);
        let currentSlide = 0; 
        let maxSlide = slides.length - 1; 
        
        // next slide function 
        nextSlide.addEventListener("click", () => {
            if (currentSlide === maxSlide) {
                currentSlide = 0;
            } else {
                currentSlide++;
            }
            
            slides.forEach((slide, idx) => {
                slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`;
            });
        });
        
        // prev slide function 
        prevSlide.addEventListener("click", () => {
            if (currentSlide === 0) {
                currentSlide = maxSlide; 
            } else {
                currentSlide--; 
            }
        
            slides.forEach((slide, idx) => {
                slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`;
            });
        });
    }
}