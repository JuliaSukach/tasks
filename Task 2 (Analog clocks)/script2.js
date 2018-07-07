window.onload = function(){

  /*  let = hh;
    let = mm;
    let = ss;*/
		
	setInterval(function () {
		let hh = new Date().getHours();
		let mm = new Date().getMinutes();
		let ss = new Date().getSeconds();
		
		fSec(hh, mm, ss);
	},1000);
	
	function fSec(hours, minutes, seconds){
		// let date = new Date();
		document.querySelector('#seconds').style.transform = `rotate(${(6*seconds)}deg)`;
		document.querySelector('#minutes').style.transform = `rotate(${(6*(minutes + (1/60)*seconds)) }deg)`;
		document.querySelector('#hours').style.transform = `rotate(${ (30*(hours + (1/60)* minutes)) }deg)`;

       // document.getElementById("time").innerHTML = date.toLocaleTimeString();
	};

    let button = document.getElementById('button');
    let input = document.getElementById('set');

	//button click
	button.addEventListener('click', setTimeOnClick);
	
	// input typing
	input.addEventListener('keyup', setTimeOnInput);

	function getInputValue() {
		let set = document.getElementById('set').value;

		let timeArr = set.split(':');
		let hh = +timeArr[0];
		let mm = +timeArr[1];
		let ss = +timeArr[2];

		return { hh, mm, ss };
	};

	function setTimeOnClick(){
	
		let newtime = new Date();
		newtime.setHours(hh);
		newtime.setMinutes(mm);
		newtime.setSeconds(ss);
		// this.time = newtime;
		document.getElementById("time").innerHTML = newtime.toLocaleTimeString();

		fSec(hh, mm, ss);
	};

	function setTimeOnInput() {
		let { hh, mm, ss } = getInputValue();
		
		fSec(hh, mm, ss);
	};
}