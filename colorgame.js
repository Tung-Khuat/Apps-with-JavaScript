var numsq = 6;
var colors = generateColors(numsq);

var picked = pickColor(); //color we're trying to get
var displayed = document.getElementById("displayed"); // display rgb of target color
var msg = document.getElementById("msg");	// try again or correct msg


function init(){
	setUpButtons();
	setUpSquares();
	reset();
}

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	reset();
})

var modeButtons = document.querySelectorAll(".mode");

function setUpButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numsq = 3: numsq = 6;
			reset();
		})
	}
}
function setUpSquares(){
	for (var i = 0; i < squares.length; i++){
		//add colors to squares
		squares[i].style.background = colors[i];
		//add listeners
		squares[i].addEventListener("click",function(){
		// get clicked square
		var clicked = this.style.background;
		//compare
		if (clicked === picked ){
			changeColors(clicked);
			msg.textContent = "Correct!";
			h1.style.background = picked;
			resetButton.textContent = "Play Again?";
		}
		else{
			this.style.background = "#232323";
			msg.textContent = "Try Again";
		}
		});
	}
}
function reset(){
	colors = generateColors(numsq);
	picked = pickColor();
	displayed.textContent = picked;
	for (var i = 0; i < squares.length; i++){
	//add colors to squares
	if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	msg.textContent = "";
	resetButton.textContent ="New Colors";
}

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
displayed.textContent = picked; // display rgb of target color

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
	 squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num){
	var arr = [];
	for (var i =0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
init();

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// 	numsq = 3;
// 	colors = generateColors(numsq);
// 	picked = pickColor();
// 	displayed.textContent = picked;
// 	for (var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
	
// })

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");

// 	numsq = 6
// 	colors = generateColors(numsq);
// 	picked = pickColor();
// 	displayed.textContent = picked;
// 	for (var i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
	
// })