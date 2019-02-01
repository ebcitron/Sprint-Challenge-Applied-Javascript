class Carousel {

    constructor(element){
        this.element = element;
        this.left = document.querySelectorAll('.carousel .left-button');
        this.right = document.querySelectorAll('.carousel .right-button');
        this.images = document.querySelectorAll('img');
        this.imagesArray = Array.from(this.images);
        console.log(this.imagesArray);
        this.imagesArray.forEach((img) => {
            img.style.display = 'none';
        })
        
        this.element.addEventListener('click', () => this.leftArrow());
        this.element.addEventListener('click', () => this.rightArrow());
    }

    leftArrow(){
        forEach((this.imagesArray) => 
        )
    
    
    }
    rightArrow(){


    }


}
console.log(this.element);
let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(thing => new Carousel(thing));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/









