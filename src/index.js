import {Button} from './scripts/buttons.js'
import {Slider} from './scripts/slider.js'

document.addEventListener('DOMContentLoaded', () => {
    Button.homePage(); 
    Button.redirectToHome(); 
    Button.directToMacro(); 

    Slider.slideAction(".fat_slide", ".f-btn-next", ".f-btn-prev"); 
    Slider.slideAction(".carb_slide", ".c-btn-next", ".c-btn-prev");
    Slider.slideAction(".protein_slide", ".p-btn-next", ".p-btn-prev"); 
});



