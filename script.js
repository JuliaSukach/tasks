window.onload = function(){
var player_1 = prompt ("Name of player_1", '');
   if(player_1 == null){
   	   player_1 = "player-1";
   }
 
var player_2 = prompt ("Name of player_2", '');
   if(player_2 == null){
       player_2 = "player-2";
   }

var arr = [player_1, player_2];
var rand = Math.floor(Math.random()* 2);
alert( arr[rand] + " " + "goes first");


for (var i=0; i<9; i++) {
		document.getElementById('game').innerHTML+='<div class="block"></div>';
	}

	var hod = 0;
	var first = arr[rand];

	document.getElementById('game').onclick = function(event){
		console.log(event);
		if (event.target.className == 'block'){
			if (first == player_1 && hod%2==0) {
				event.target.innerHTML = 'X';
			}
			else if (first == player_2 && hod%2==0){
				event.target.innerHTML = '0';
			}
			else if (first == player_2 && hod%2==1){
				event.target.innerHTML = 'X';
			}
			else{
				event.target.innerHTML = '0';
			}
			hod++;
			checkWinner();
		}
	}

	function checkWinner(){
		var allblock = document.getElementsByClassName('block');
		
		if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X')
      showPrompt(player_1 + " "+ 'won!');
    		if (allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X')
      showPrompt(player_1 + " "+ 'won!');
		if (allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt(player_1 + " "+ 'won!');
		if (allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML=='X') showPrompt(player_1 + " "+ 'won!');
		if (allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X') showPrompt(player_1 + " "+ 'won!');
		if (allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt(player_1 + " "+ 'won!');
		if (allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt(player_1 + " "+ 'won!');
		if (allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML=='X') showPrompt(player_1 + " "+ 'won!');
		
		if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') showPrompt(player_2 + " "+ 'won!');
		if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') showPrompt(player_2 + " "+ 'won!');
		if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt(player_2 + " "+ 'won!');
		if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') showPrompt(player_2 + " "+ 'won!');
		if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') showPrompt(player_2 + " "+ 'won!');
		if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt(player_2 + " "+ 'won!');
		if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt(player_2 + " "+ 'won!');
		if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') showPrompt(player_2 + " "+ 'won!');
		
		if (allblock[0].innerHTML=='X' && allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X'
		 && allblock[5].innerHTML=='X' && allblock[7].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[2].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X'
		 && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X'
		 && allblock[6].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[2].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X'
		 && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='X' && allblock[2].innerHTML=='X' && allblock[3].innerHTML=='X'
		 && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X'
		 && allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X'
		 && allblock[6].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X' && allblock[3].innerHTML=='X'
		 && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[5].innerHTML=='X'
		 && allblock[6].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[5].innerHTML=='X'
		 && allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='X' && allblock[2].innerHTML=='X' && allblock[3].innerHTML=='X'
		 && allblock[5].innerHTML=='X' && allblock[7].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X' && allblock[3].innerHTML=='X'
		 && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0'
		 && allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[2].innerHTML=='0' && allblock[3].innerHTML=='0'
		 && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[2].innerHTML=='0' && allblock[3].innerHTML=='0'
		 && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0' && allblock[3].innerHTML=='0'
		 && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0'
		 && allblock[6].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[2].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0'
		 && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0'
		 && allblock[5].innerHTML=='0' && allblock[7].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0'
		 && allblock[5].innerHTML=='0' && allblock[6].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0'
		 && allblock[6].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[5].innerHTML=='0'
		 && allblock[6].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[5].innerHTML=='0'
		 && allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[2].innerHTML=='0' && allblock[3].innerHTML=='0'
		 && allblock[5].innerHTML=='0' && allblock[7].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0' && allblock[3].innerHTML=='0'
		 && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0'
		 && allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[2].innerHTML=='0' && allblock[3].innerHTML=='0'
		 && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0' && allblock[3].innerHTML=='0'
		 && allblock[6].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');
	    if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[5].innerHTML=='0'
		 && allblock[6].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt('DRAW');

	}

function showCover() {
      var coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';
      document.body.appendChild(coverDiv);
    }

    function hideCover() {
      document.body.removeChild(document.getElementById('cover-div'));
    }

    function showPrompt(text) {
      showCover();
      var form = document.getElementById('prompt-form');
      var container = document.getElementById('prompt-form-container');
      document.getElementById('prompt-message').innerHTML = text;
     
      form.elements.again.onclick = function() {
        location.reload();
      };

      container.style.display = 'block';
      form.elements.text.focus();
    }       
}






 