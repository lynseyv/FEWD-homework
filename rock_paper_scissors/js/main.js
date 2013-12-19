var yourScore=0;botsScore=0, randoWepo="";

function botsWeapon(){
	var randoWepoNum=Math.random();
	if(randoWepoNum<.3333333){
		randoWepo="rock";
	}
	else if(randoWepoNum<.67){
		randoWepo="paper";
	}
	else{
		randoWepo="scissors";
	}
	return randoWepo;
}


document.getElementById("rock").onclick=throwRock;
function throwRock(){
botsWeapon();
if (randoWepo== "scissors"){
yourScore++;

document.getElementById("humanScore").innerHTML=yourScore;
}
else if (randoWepo== "paper") {
botsScore++;

document.getElementById("computerScore").innerHTML=botsScore;
}
}


document.getElementById("paper").onclick=throwPaper;
function throwPaper(){
botsWeapon();
if (randoWepo== "rock"){
yourScore++;
document.getElementById("humanScore").innerHTML=yourScore;
}
else if (randoWepo=="scissors") {
botsScore++;
document.getElementById("computerScore").innerHTML=botsScore;
}
}


document.getElementById("scissors").onclick=throwScissors;
function throwScissors(){
botsWeapon();
if (randoWepo== "paper") {
yourScore++;
document.getElementById("humanScore").innerHTML=yourScore;
}
else if (randoWepo=="rock") {
botsScore++;
document.getElementById("computerScore").innerHTML=botsScore;
}
}

