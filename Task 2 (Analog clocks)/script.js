window.onload = function(){

	let d  = new Date();
	let ss = 6*d.getSeconds();
	let mm = 6*(d.getMinutes() + (1/60)*d.getSeconds());
	let hh = 30*(d.getHours() + (1/60)* d.getMinutes());


	fSec(hh, mm, ss);
	setInterval(function () {
		fSec(hh, mm, ss);
	},1000);

	function fSec(hours, minutes, seconds){
		document.querySelector('#seconds').style.transform = `rotate(${ seconds }deg)`;
		document.querySelector('#minutes').style.transform = `rotate(${ minutes }deg)`;
		document.querySelector('#hours').style.transform = `rotate(${ hours }deg)`;

		if (seconds+6 == 366) {
			seconds = 0;
			minutes = minutes +6;}
			else if (minutes+6 == 366) {
				minutes = 0;
				hours = hours +30;
			}
		seconds = seconds +6;
		let date = new Date();
        document.getElementById("time").innerHTML = date.toLocaleTimeString();
	};

	
	let button = document.getElementById('button');
	let input = document.getElementById('set');

	//button click
	button.addEventListener('click', SetTimeOnClick);
	
	// input typing
	input.addEventListener('keyup', setTimeOnInput);

	function SetTimeOnClick(){ 
		let set = document.getElementById('set').value;

		let timeArr = set.split(':');
		let hh = +timeArr[0];
		let mm = +timeArr[1];
		let ss = +timeArr[2];

		fSec(hh, mm, ss);
	}

	function setTimeOnInput(event) {
		let time = event.target.value;
		console.log(time);
		let timeArr = time.split(':');
		let hh = +timeArr[0];
		let mm = +timeArr[1];
		let ss = +timeArr[2];

		fSec(hh, mm, ss);
	}
}



