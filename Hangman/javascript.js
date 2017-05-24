
window.onload = function() {
var Words = {};
Words.List = [];
Words.List[0] = "mac";
Words.List[1] = "desktop";
Words.List[2] = "keyboard";
Words.List[3] = "display";
Words.List[4] = "webcam";
Words.List[5] = "mouse";
Words.length = Words.List.length;


Game = {};
Game.WordArray = [];
Game.WordArraySS = [];
Game.Guesses = 0;
Game.WordBankNum = 6;

Game.Word = "";
Game.WordSS = "";
Game.Mess1 = "Tightening the noose!";
Game.Mess2 = "You've lost your head!";
Game.Mess3 = "You've lost your torso!";
Game.Mess4 = "You've lost your right arm!";
Game.Mess5 = "You've lost your left arm!";
Game.Mess6 = "You've lost your right leg!";
Game.Mess7 = "You've lost your left leg!";


//function to pick word
Game.PickWord = function() {
  Game.Word = Words.List[(Math.floor(Math.random()*Game.WordBankNum))]

}
//word spaces hint
 Game.SetSpaces = function() {
     Game.PickWord();
    for( i=0; i<Game.Word.length; i++) {
       Game.WordArray[i] = Game.Word.charAt(i);
       Game.WordArraySS[i] = "_";
    }
     Game.WordSS = Game.WordArraySS.join("");
     document.getElementById("WORD").innerHTML = Game.WordSS;
 }
//choses letter
 Game.ChooseLetter = function(letter) {
   for(i = 0; i < Game.Word.length; i++){
   Game.WordArray[i] != Game.Word.charAt(i);
   if(Game.Word.charAt(i) == letter){
     Game.WordArraySS[i] = letter;
     Game.Guesses -= 1;

   }

   }

  //Send messages to user
  if( Game.Guesses < 0){
     Game.Guesses += 1;
     document.getElementById("GUESS").innerHTML = Game.Guesses;
}
  else if (Game.Guesses < 1) {
  Game.Guesses += 1;
  document.getElementById("GUESS").innerHTML = Game.Guesses;
  document.getElementById("mess1").innerHTML = Game.Mess1;
}
  else if (Game.Guesses < 2) {
  Game.Guesses += 1;
  document.getElementById("GUESS").innerHTML = Game.Guesses;
  document.getElementById("mess2").innerHTML = Game.Mess2;
}
  else if (Game.Guesses < 3) {
  Game.Guesses += 1;
  document.getElementById("GUESS").innerHTML = Game.Guesses;
  document.getElementById("mess3").innerHTML = Game.Mess3;
  }
  else if (Game.Guesses < 4) {
  Game.Guesses += 1;
  document.getElementById("GUESS").innerHTML = Game.Guesses;
  document.getElementById("mess4").innerHTML = Game.Mess4;
  }
  else if (Game.Guesses < 5) {
  Game.Guesses += 1;
  document.getElementById("GUESS").innerHTML = Game.Guesses;
  document.getElementById("mess5").innerHTML = Game.Mess5;
  }
  else if (Game.Guesses < 6) {
  Game.Guesses += 1;
  document.getElementById("GUESS").innerHTML = Game.Guesses;
  document.getElementById("mess6").innerHTML = Game.Mess6;
  }
  else if (Game.Guesses < 7) {
  Game.Guesses += 1;
  document.getElementById("GUESS").innerHTML = Game.Guesses;
  document.getElementById("mess7").innerHTML = Game.Mess7;
  }

   Game.WordSS = Game.WordArraySS.join("")
   document.getElementById("WORD").innerHTML = Game.WordSS;

   Game.Word1 = Game.WordArray.join("");
   Game.Word2 = Game.WordArraySS.join("");
if(Game.Word1 == Game.Word2){
    document.getElementById("won").innerHTML = Game.Won;
 }
 if(Game.Guesses > 6){
   document.getElementById("WORD").innerHTML == Game.Word1;
   document.getElementById("loss").innerHTML = Game.Loss;
}
Game.Won = "You Won! Play Again!";
Game.Loss = "You're dead! The word was *" +  Game.Word + "*, Play Again!";
 }
Game.PickWord();
Game.SetSpaces();
}

//alpha button presses

$(function(){
	$("#a").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("a");
      document.getElementById("a").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#b").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("b");
      document.getElementById("b").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#c").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("c");
      document.getElementById("c").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#d").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("d");
      document.getElementById("d").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#e").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("e");
      document.getElementById("e").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#f").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("f");
      document.getElementById("f").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#g").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("g");
      document.getElementById("g").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#h").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("h");
      document.getElementById("h").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#i").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("i");
      document.getElementById("i").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#j").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("j");
      document.getElementById("j").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#k").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("k");
      document.getElementById("k").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#l").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("l");
      document.getElementById("l").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#m").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("m");
      document.getElementById("m").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#n").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("n");
      document.getElementById("n").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#o").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("o");
      document.getElementById("o").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#p").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("p");
      document.getElementById("p").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#q").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("q");
      document.getElementById("q").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#r").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("r");
      document.getElementById("r").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#s").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("s");
      document.getElementById("s").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#t").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("t");
      document.getElementById("t").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#u").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("u");
      document.getElementById("u").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#v").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("v");
      document.getElementById("v").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#w").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("w");
      document.getElementById("w").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#x").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("x");
      document.getElementById("x").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#y").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("y");
      document.getElementById("y").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#z").click(function(event) {
			event.preventDefault();
			Game.ChooseLetter("z");
      document.getElementById("z").style.visibility = 'hidden';
	});
	}
);

$(function(){
	$("#newGame").click(function(event) {
			event.preventDefault();
			window.location.reload();
	});
	}
);
