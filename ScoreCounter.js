var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1d = document.querySelector("#p1d");
var p2d = document.querySelector("#p2d");
var h1 = document.querySelector("h1");
var para = document.querySelector("p");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

 
p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1d.classList.add("winner");
			gameOver = true;
		}
		p1d.textContent = p1Score;
		};
});
 
p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2d.classList.add("winner");
			gameOver = true;
		}
		p2d.textContent = p2Score;
	};
});

document.getElementById("reset").addEventListener("click",function(){
	reset();
});
numInput.addEventListener("change",function(){
	para.textContent = "Playing to: " + numInput.value;
	winningScore = Number(numInput.value);
	reset();
})

function reset(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1d.textContent = 0;
	p2d.textContent = 0;
	p1d.classList.remove("winner");
	p2d.classList.remove("winner");
}