export const Button = {

    // initialize a home page 
    homePage() {
        document.querySelector("#main_page").style.display = 'block';

        const pages = document.getElementsByClassName("page");        
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.display = 'none'; 
        }
    },

    // goes back to home 
    redirectToHome() {
        const homeButton = document.querySelector(".logo-head"); 
        homeButton.addEventListener('click', () => {
            this.homePage();
        });
    },

    // helper method to hide homepage 
    hideHomePage() {
        document.querySelector("#main_page").style.display = 'none';
    },

    // helper methods to show macronutrient slides 
    showProteinOnly() {
        this.hideHomePage(); 

        document.querySelector("#carb_page").style.display = 'none';
        document.querySelector("#fat_page").style.display = 'none';

        const proteinPage = document.querySelector("#protein_page"); 
        proteinPage.style.display = 'grid'; 
    },

    showCarbOnly() {
        this.hideHomePage();

        document.querySelector("#protein_page").style.display = 'none';
        document.querySelector("#fat_page").style.display = 'none';

        const carbPage = document.querySelector("#carb_page"); 
        carbPage.style.display = 'grid'; 
    },

    showFatOnly() {
        this.hideHomePage();
        
        document.querySelector("#carb_page").style.display = 'none';
        document.querySelector("#protein_page").style.display = 'none';

        const fatPage = document.querySelector("#fat_page");
        fatPage.style.display = 'grid';
    },

    // Buttons for macronutrient pages 
    directToMacro() {
        const proteinButton = document.querySelector(".protein"); 
        proteinButton.addEventListener('click', () => {
            this.showProteinOnly();
        });

        const carbButton = document.querySelector(".carbs");
        carbButton.addEventListener('click', () => {
            this.showCarbOnly(); 
        });

        const fatButton = document.querySelector(".fats"); 
        fatButton.addEventListener('click', () => {
            this.showFatOnly();
        });
    },
    
};