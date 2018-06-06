window.onload = function(){
let player1 = prompt ("Name of player1", '');
   if(player1 == null){
   	   player1 = "player-1";
   }
 
let player2 = prompt ("Name of player2", '');
   if(player2 == null){
       player2 = "player-2";
   }

let arr = [player1, player2];
let rand = Math.floor(Math.random()* 2);
alert( arr[rand] + " " + "goes first");


for (let i=0; i<9; i++) {
		document.getElementById('game').innerHTML+='<div class="block"></div>';
	}

	let step = 0;
	let first = arr[rand];

	document.getElementById('game').onclick = function(event){
		console.log(event);
		if (event.target.className == 'block'){
			if (first == player1 && step%2==0) {
				event.target.innerHTML = 'X';
			}
			else if (first == player2 && step%2==0){
				event.target.innerHTML = '0';
			}
			else if (first == player2 && step%2==1){
				event.target.innerHTML = 'X';
			}
			else{
				event.target.innerHTML = '0';
			}
			step++;
			checkWinner();
		}
	}

	function checkWinner(){
		let allblock = document.getElementsByClassName('block');
		
		if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X')
      showPrompt(player1 + " "+ 'won!');
    		if (allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X')
      showPrompt(player1 + " "+ 'won!');
		if (allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt(player1 + " "+ 'won!');
		if (allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML=='X') showPrompt(player1 + " "+ 'won!');
		if (allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X') showPrompt(player1 + " "+ 'won!');
		if (allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt(player1 + " "+ 'won!');
		if (allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X') showPrompt(player1 + " "+ 'won!');
		if (allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML=='X') showPrompt(player1 + " "+ 'won!');
		
		if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') showPrompt(player2 + " "+ 'won!');
		if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') showPrompt(player2 + " "+ 'won!');
		if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt(player2 + " "+ 'won!');
		if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') showPrompt(player2 + " "+ 'won!');
		if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') showPrompt(player2 + " "+ 'won!');
		if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt(player2 + " "+ 'won!');
		if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') showPrompt(player2 + " "+ 'won!');
		if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') showPrompt(player2 + " "+ 'won!');
		
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
      let coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';
      document.body.appendChild(coverDiv);
    }

    function hideCover() {
      document.body.removeChild(document.getElementById('cover-div'));
    }

    function showPrompt(text) {
      showCover();
      let form = document.getElementById('prompt-form');
      let container = document.getElementById('prompt-form-container');
      document.getElementById('prompt-message').innerHTML = text;
     
      form.elements.again.onclick = function() {
        location.reload();
      };

      container.style.display = 'block';
      form.elements.text.focus();
    }       
}






 