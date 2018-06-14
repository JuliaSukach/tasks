window.onload = function(){
	setInterval(fSec,1000);
	let d = new Date();
	let seconds = 6*d.getSeconds();
	let minutes = 6*(d.getMinutes() + (1/60)*d.getSeconds());
	let hours = 30*(d.getHours() + (1/60)* d.getMinutes());


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
		let data = new Date();
        document.getElementById("time").innerHTML = data.toLocaleTimeString();
	}
}

function getSetTime(){
	let set = document.getElementById('set');
	let data = document.getElementById('here');
	let result = new Date (set.value);
    data.innerHTML = result.toLocaleTimeString();
}