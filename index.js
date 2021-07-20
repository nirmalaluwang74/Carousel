
// const slides = document.getElementsByClassName("carousel-item");
// console.log(slides);

// let slidePosition = 0;
// let totalSlides = slides.length;
// console.log(totalSlides);
// let nextBtnEl = document.getElementById("carousel-button-next")
// console.log(nextBtnEl);


// // document.getElementById("carousel-button-prev").addEventListener('click', moveToPrevSlide());



// nextBtnEl.addEventListener('click', function() {
// 	if (slidePosition === totalSlides-1) {
// 		slidePosition === 0;
// 		}	else {
// 		slidePosition++;
// 		}
// slides[slidePosition].classList.add("carousel-item-visible");
// })


const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;



document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);


	function moveToNextSlide() {
		console.log(slidePosition)
		if (slidePosition === totalSlides - 1) {
			slidePosition = 0;
	} else {
			slidePosition++;
	}	 
	return  slides[slidePosition].classList.add("carousel-item-visible");
}
