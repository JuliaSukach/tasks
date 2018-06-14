window.onload = function(){
	setInterval(fSec,1000);
	var seconds = 0;
	var minutes = 0;
	var hours = 0;


	function fSec(){
		document.querySelector('#seconds').style.transform = 'rotate('+seconds+'deg)';
		document.querySelector('#minutes').style.transform = 'rotate('+minutes+'deg)';
		document.querySelector('#hours').style.transform = 'rotate('+hours+'deg)';
		if (seconds+6 == 366) {
			seconds = 0;
			minutes = minutes +6;}
			else if (minutes+6 == 366) {
				minutes = 0;
				hours = hours +30;
			}

		
		seconds = seconds +6;
		var data = new Date();
        document.getElementById("time").innerHTML = data.toLocaleTimeString();
	}
}

function getSetTime(){
	var set = document.getElementById('set');
	var data = document.getElementById('here');
	var result = new Date (set.value);
    document.data.innerHTML = result.toLocaleTimeString();
}