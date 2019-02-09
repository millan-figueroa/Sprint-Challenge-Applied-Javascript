class Carousel {
    constructor(urls) {
        // Create HTML:
        // create div with class "carousel"
        // create div with class "left-button" and append that to div above.
    
        /* 
            <div class="carousel">
                <div class="left-button"><</div>
                <img src="./assets/carousel/mountains.jpeg" />
                <img src="./assets/carousel/computer.jpeg" />
                <img src="./assets/carousel/trees.jpeg" />
                <img src="./assets/carousel/turntable.jpeg" />
                <div class="right-button">></div>
            </div>
        */
    
        const carouselDiv = document.createElement("div");
        carouselDiv.classList.add("carousel");
    
        const leftButtonDiv = document.createElement("div");
        leftButtonDiv.classList.add("left-button");
        leftButtonDiv.textContent = "<";
        carouselDiv.appendChild(leftButtonDiv);
    
        urls.forEach(url => {
          const image = document.createElement("img");
          carouselDiv.appendChild(image);
          console.log(url);
          image.src = url;
        });
    
        const rightButtonDiv = document.createElement("div");
        rightButtonDiv.classList.add("right-button");
        rightButtonDiv.textContent = ">";
        carouselDiv.appendChild(rightButtonDiv);
    
        this.element = carouselDiv;
        console.log("carousel");
    
        // Create a current index
        this.currentImageIndex = 0;
    
        this.images = this.element.querySelectorAll(".carousel img");
        console.log(this.images);
    
        // display first image as default
        this.images[this.currentImageIndex].style.display = "block";
    
        // const rightButton = this.element.querySelector(".right-button");
        // console.log(rightButton);
        rightButtonDiv.addEventListener("click", () => this.slideNext());
    
        // const leftButton = this.element.querySelector(".left-button");
        // console.log(leftButton);
        leftButtonDiv.addEventListener("click", () => this.slideBack());
      }
    
      slideNext() {
        console.log("slide next clicked");
        this.images[this.currentImageIndex].style.display = "none";
        this.currentImageIndex++;
    
        // at the end of all images, reset to 0
        if (this.currentImageIndex === this.images.length) {
          this.currentImageIndex = 0;
        }
    
        this.images[this.currentImageIndex].style.display = "block";
      }
    
      slideBack() {
        console.log("slide back clicked");
        this.images[this.currentImageIndex].style.display = "none";
        this.currentImageIndex--;
    
        // if at the first image go to the last image
        if (this.currentImageIndex === -1) {
          this.currentImageIndex = this.images.length - 1;
        }
        this.images[this.currentImageIndex].style.display = "block";
      }
    }


let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/