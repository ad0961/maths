			var playcheck = false;
			var score = 0;
			var game = document.getElementById("startreset");
			var count;
			var timer;
			var correctanswer;
			game.onclick = function () { 
				game.innerHTML = "Reset Game";
				if (playcheck==true) {
					window.location.reload();
				}
				else {
					playcheck = true;
					count=60;
					document.getElementById("scorevalue").innerHTML= score;
					show("timeremaining");
					hide("gameover");
					
					starttimer();
					
					generateQnA();
	}
};


for(i=1;i<5;i++){
document.getElementById("ans"+i).onclick=function(){
	if(playcheck){
	if(this.innerHTML==correctanswer){
		hide("incorrect");
		show("correct");
		setTimeout(function(){hide("correct")},1500);
		score++;
		document.getElementById("scorevalue").innerHTML= score;
	}
	else{
		hide("correct");
		show("incorrect");
		setTimeout(function(){hide("incorrect")},1000);
	}
	generateQnA();
}
}
}

function starttimer(){
	timer=setInterval(function(){count-=1;
	document.getElementById("timeremainingvalue").innerHTML=count;
						   if(count==0){
							  stoptimer();
							  hide("timeremaining");
							  hide("correct");
							   
							  hide("incorrect");
							  document.getElementById("gameover").innerHTML = "<p>game over</p><p>your score is : "
							   +score+"</p>";
							   
							   show("gameover");
							   game.innerHTML="Start Game";
							   score=0;
							   playcheck=false;
						   }
						  },1000);
}

function stoptimer(){
	clearInterval(timer);
}

function hide(Id){
	document.getElementById(Id).style.display="none";
}

function show(Id){
	document.getElementById(Id).style.display="block";
}

function generateQnA(){
	var x = Math.round(Math.random()*9)+1;
	var y = Math.round(Math.random()*9)+1;
	correctanswer=x*y;
	var answers=[correctanswer];
	var wronganswer;
	
	document.getElementById("question").innerHTML=x+"x"+y;
	var correctposition = Math.round(Math.random()*3)+1;
	document.getElementById("ans"+correctposition).innerHTML=correctanswer;
	
	for(i=1;i<5;i++){
		if(i!=correctposition){
			do{
				wronganswer=(Math.round(Math.random()*9)+1)*(Math.round(Math.random()*9)+1);
		}while(answers.indexOf(wronganswer)>-1);
			document.getElementById("ans"+i).innerHTML=wronganswer;
			answers.push(wronganswer);
		}
	}
}