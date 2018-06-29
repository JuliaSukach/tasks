window.onload = function(){

  /*  let = hh;
    let = mm;
    let = ss;*/
		
	setInterval(function () {
		fSec();
	},1000);

	function fSec(hours, minutes, seconds){
		let date = new Date();
		document.querySelector('#seconds').style.transform = `rotate(${(6*date.getSeconds())}deg)`;
		document.querySelector('#minutes').style.transform = `rotate(${(6*(date.getMinutes() + (1/60)*date.getSeconds())) }deg)`;
		document.querySelector('#hours').style.transform = `rotate(${ (30*(date.getHours() + (1/60)* date.getMinutes())) }deg)`;

       // document.getElementById("time").innerHTML = date.toLocaleTimeString();
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

	let newtime = new Date();
	newtime.setHours(hh);
	newtime.setMinutes(mm);
	newtime.setSeconds(ss);
	this.time = newtime;
	document.getElementById("time").innerHTML = newtime.toLocaleTimeString();
	fSec(hh, mm, ss);
};

function setTimeOnInput(event) {
	
	let time = event.target.value;
		console.log(time);

 		let timeArr = time.split(':');
    	let hh = +timeArr[0];
    	let mm = +timeArr[1];
    	let ss = +timeArr[2];

	fSec(hh, mm, ss);
};
}