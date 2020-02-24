// Caption and Opacity JS for Case Studies

var hoverOne = document.querySelector('#study1');
var hoverTwo = document.querySelector('#study2');
var hoverThree = document.querySelector('#study3');
var hoverFour = document.querySelector('#study4');
var hoverFive = document.querySelector('#study5');

var captionOne = document.querySelector('#caption1');
var captionTwo = document.querySelector('#caption2');
var captionThree = document.querySelector('#caption3');
var captionFour = document.querySelector('#caption4');
var captionFive = document.querySelector('#caption5');

function myFunction(x) {
  if (x.matches) { // If media query matches
    hoverOne.addEventListener("mouseover", function(){
		captionOne.style.opacity = "1";
		captionOne.style.transitionDelay = "0.7s";
		hoverOne.style.width = "75%";
		hoverTwo.style.opacity = "0.7";
		hoverThree.style.opacity = "0.7";
		hoverFour.style.opacity = "0.7";
		hoverFive.style.opacity = "0.7";
	});
	hoverOne.addEventListener("mouseout", function(){
		captionOne.style.opacity = "0";
		captionOne.style.transitionDelay = "0s";
		hoverOne.style.width = "";
		hoverTwo.style.opacity = "1";
		hoverThree.style.opacity = "1";
		hoverFour.style.opacity = "1";
		hoverFive.style.opacity = "1";
	});


	hoverTwo.addEventListener("mouseover", function(){
		captionTwo.style.opacity = "1";
		captionTwo.style.transitionDelay = "0.7s";
		hoverTwo.style.width = "75%";
		hoverOne.style.opacity = "0.7";
		hoverThree.style.opacity = "0.7";
		hoverFour.style.opacity = "0.7";
		hoverFive.style.opacity = "0.7";
	});
	hoverTwo.addEventListener("mouseout", function(){
		captionTwo.style.opacity = "0";
		captionTwo.style.transitionDelay = "0s";
		hoverTwo.style.width = "";
		hoverOne.style.opacity = "1";
		hoverThree.style.opacity = "1";
		hoverFour.style.opacity = "1";
		hoverFive.style.opacity = "1";
	});


	hoverThree.addEventListener("mouseover", function(){
		captionThree.style.opacity = "1";
		captionThree.style.transitionDelay = "0.7s";
		hoverThree.style.width = "75%";
		hoverTwo.style.opacity = "0.7";
		hoverOne.style.opacity = "0.7";
		hoverFour.style.opacity = "0.7";
		hoverFive.style.opacity = "0.7";
	});
	hoverThree.addEventListener("mouseout", function(){
		captionThree.style.opacity = "0";
		captionThree.style.transitionDelay = "0s";
		hoverThree.style.width = "";
		hoverTwo.style.opacity = "1";
		hoverOne.style.opacity = "1";
		hoverFour.style.opacity = "1";
		hoverFive.style.opacity = "1";
	});


	hoverFour.addEventListener("mouseover", function(){
		captionFour.style.opacity = "1";
		captionFour.style.transitionDelay = "0.7s";
		hoverFour.style.width = "75%";
		hoverTwo.style.opacity = "0.7";
		hoverThree.style.opacity = "0.7";
		hoverOne.style.opacity = "0.7";
		hoverFive.style.opacity = "0.7";
	});
	hoverFour.addEventListener("mouseout", function(){
		captionFour.style.opacity = "0";
		captionFour.style.transitionDelay = "0s";
		hoverFour.style.width = "";
		hoverTwo.style.opacity = "1";
		hoverThree.style.opacity = "1";
		hoverOne.style.opacity = "1";
		hoverFive.style.opacity = "1";
	});


	hoverFive.addEventListener("mouseover", function(){
		captionFive.style.opacity = "1";
		captionFive.style.transitionDelay = "0.7s";
		hoverFive.style.width = "75%";
		hoverTwo.style.opacity = "0.7";
		hoverThree.style.opacity = "0.7";
		hoverFour.style.opacity = "0.7";
		hoverOne.style.opacity = "0.7";
	});
	hoverFive.addEventListener("mouseout", function(){
		captionFive.style.opacity = "0";
		captionFive.style.transitionDelay = "0s";
		hoverFive.style.width = "";
		hoverTwo.style.opacity = "1";
		hoverThree.style.opacity = "1";
		hoverFour.style.opacity = "1";
		hoverOne.style.opacity = "1";
	});
  }
}

var x = window.matchMedia("(min-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



// Opacity JS for Other Work

var workOne = document.querySelector('#work1');
var workTwo = document.querySelector('#work2');
var workThree = document.querySelector('#work3');
var workFour = document.querySelector('#work4');
var workFive = document.querySelector('#work5');
var workSix = document.querySelector('#work6');
var workSeven = document.querySelector('#work7');
var workEight = document.querySelector('#work8');


workOne.addEventListener("mouseover", function(){
		workTwo.style.opacity = "0.7";
		workThree.style.opacity = "0.7";
		workFour.style.opacity = "0.7";
		workFive.style.opacity = "0.7";
		workSix.style.opacity = "0.7";
		workSeven.style.opacity = "0.7";
		workEight.style.opacity = "0.7";
	});
workOne.addEventListener("mouseout", function(){
		workTwo.style.opacity = "1";
		workThree.style.opacity = "1";
		workFour.style.opacity = "1";
		workFive.style.opacity = "1";
		workSix.style.opacity = "1";
		workSeven.style.opacity = "1";
		workEight.style.opacity = "1";
	});

workTwo.addEventListener("mouseover", function(){
		workOne.style.opacity = "0.7";
		workThree.style.opacity = "0.7";
		workFour.style.opacity = "0.7";
		workFive.style.opacity = "0.7";
		workSix.style.opacity = "0.7";
		workSeven.style.opacity = "0.7";
		workEight.style.opacity = "0.7";
	});
workTwo.addEventListener("mouseout", function(){
		workOne.style.opacity = "1";
		workThree.style.opacity = "1";
		workFour.style.opacity = "1";
		workFive.style.opacity = "1";
		workSix.style.opacity = "1";
		workSeven.style.opacity = "1";
		workEight.style.opacity = "1";
	});

workThree.addEventListener("mouseover", function(){
		workOne.style.opacity = "0.7";
		workTwo.style.opacity = "0.7";
		workFour.style.opacity = "0.7";
		workFive.style.opacity = "0.7";
		workSix.style.opacity = "0.7";
		workSeven.style.opacity = "0.7";
		workEight.style.opacity = "0.7";
	});
workThree.addEventListener("mouseout", function(){
		workOne.style.opacity = "1";
		workTwo.style.opacity = "1";
		workFour.style.opacity = "1";
		workFive.style.opacity = "1";
		workSix.style.opacity = "1";
		workSeven.style.opacity = "1";
		workEight.style.opacity = "1";
	});

workFour.addEventListener("mouseover", function(){
		workOne.style.opacity = "0.7";
		workTwo.style.opacity = "0.7";
		workThree.style.opacity = "0.7";
		workFive.style.opacity = "0.7";
		workSix.style.opacity = "0.7";
		workSeven.style.opacity = "0.7";
		workEight.style.opacity = "0.7";
	});
workFour.addEventListener("mouseout", function(){
		workOne.style.opacity = "1";
		workTwo.style.opacity = "1";
		workThree.style.opacity = "1";
		workFive.style.opacity = "1";
		workSix.style.opacity = "1";
		workSeven.style.opacity = "1";
		workEight.style.opacity = "1";
	});

workFive.addEventListener("mouseover", function(){
		workOne.style.opacity = "0.7";
		workTwo.style.opacity = "0.7";
		workThree.style.opacity = "0.7";
		workFour.style.opacity = "0.7";
		workSix.style.opacity = "0.7";
		workSeven.style.opacity = "0.7";
		workEight.style.opacity = "0.7";
	});
workFive.addEventListener("mouseout", function(){
		workOne.style.opacity = "1";
		workTwo.style.opacity = "1";
		workThree.style.opacity = "1";
		workFour.style.opacity = "1";
		workSix.style.opacity = "1";
		workSeven.style.opacity = "1";
		workEight.style.opacity = "1";
	});

workSix.addEventListener("mouseover", function(){
		workOne.style.opacity = "0.7";
		workTwo.style.opacity = "0.7";
		workThree.style.opacity = "0.7";
		workFour.style.opacity = "0.7";
		workFive.style.opacity = "0.7";
		workSeven.style.opacity = "0.7";
		workEight.style.opacity = "0.7";
	});
workSix.addEventListener("mouseout", function(){
		workOne.style.opacity = "1";
		workTwo.style.opacity = "1";
		workThree.style.opacity = "1";
		workFour.style.opacity = "1";
		workFive.style.opacity = "1";
		workSeven.style.opacity = "1";
		workEight.style.opacity = "1";
	});

workSeven.addEventListener("mouseover", function(){
		workOne.style.opacity = "0.7";
		workTwo.style.opacity = "0.7";
		workThree.style.opacity = "0.7";
		workFour.style.opacity = "0.7";
		workFive.style.opacity = "0.7";
		workSix.style.opacity = "0.7";
		workEight.style.opacity = "0.7";
	});
workSeven.addEventListener("mouseout", function(){
		workOne.style.opacity = "1";
		workTwo.style.opacity = "1";
		workThree.style.opacity = "1";
		workFour.style.opacity = "1";
		workFive.style.opacity = "1";
		workSix.style.opacity = "1";
		workEight.style.opacity = "1";
	});

workEight.addEventListener("mouseover", function(){
		workOne.style.opacity = "0.7";
		workTwo.style.opacity = "0.7";
		workThree.style.opacity = "0.7";
		workFour.style.opacity = "0.7";
		workFive.style.opacity = "0.7";
		workSix.style.opacity = "0.7";
		workSeven.style.opacity = "0.7";
	});
workEight.addEventListener("mouseout", function(){
		workOne.style.opacity = "1";
		workTwo.style.opacity = "1";
		workThree.style.opacity = "1";
		workFour.style.opacity = "1";
		workFive.style.opacity = "1";
		workSix.style.opacity = "1";
		workSeven.style.opacity = "1";
	});



