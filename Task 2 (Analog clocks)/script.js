window.onload = function(){

	let d = new Date();
	let seconds = 6*d.getSeconds();
	let minutes = 6*(d.getMinutes() + (1/60)*d.getSeconds());
	let hours = 30*(d.getHours() + (1/60)* d.getMinutes());


	fSec(hours, minutes,seconds);
	setInterval(function () {
		fSec (hours, minutes,seconds);
	},1000);

	function fSec(){
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
	}
}

//button
/*function SetTime(){

	let set = document.getElementById('set').value;

	set.onclick = function() {}

	let button = document.getElementById('button');
	document.getElementById('time').innerHTML = set;

	button.addEventListener('click', function(event){
		let time = event.target.value;
		let timeArr = time.split(':');
     	let hh = +timeArr[0];
    	let mm = +timeArr[1];
    	let ss = +timeArr[2];

	fSec(hh,mm,ss);
	setInterval(function () {
		fSec (hh, mm,ss);
	},1000);
}
);
}
*/
//input
  /* let set = document.getElementById('set').value;
   set.oninput = function() {
   set.addEventListener("input", function(event){
   	let time = event.target.value;

   	let timeArr = time.split(':');

   	let hh = +timeArr[0];
   	let mm = +timeArr[1];
   	let ss = +timeArr[2];

   	fSec(hh, mm, ss);
   }
   	);
};*/