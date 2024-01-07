// const images = ["gala room.jpg", "rainbow2.jpg" ,"rainbow3.jpg"];
// let currentImageIndex = 0;

//     function updateImage() {
//         const currentImg = document.getElementById("currentImg");
//         currentImg.src = images[currentImageIndex];
//     }

//     function nextImage() {
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//         updateImage();
//     }

//     function prevImage() {
//         currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//         updateImage();
//     }

//     // Initial image load
//     updateImage();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


