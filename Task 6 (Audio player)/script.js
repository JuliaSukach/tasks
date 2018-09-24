
/*let showSongOne = function () {
	console.log("Play song...");

	let oneSong = new Audio('playlist/Kanye West - Famous.mp3');
	oneSong.play();
	
	let music = document.getElementById('song-1');

	let result = music.appendChild(oneSong);

	let nameSong = document.querySelector("label.first");
	
	let broadcast = document.getElementById('name-song');
	
	broadcast.innerText = nameSong.innerText;

	let stateSong = document.getElementById('state');
	stateSong.innerHTML = 'Playing...';
	
	
	let pausePlaylist = function () {
		oneSong.pause();
	}
	
	let pause = document.getElementById('button-start-pause');
	pause.onclick = pausePlaylist;

}

document.getElementById('song-1').onclick = function (event) {
	let what = event.target
}


let showSongTwo = function () {
	console.log("Play song...");
	let twoSong = new Audio('playlist/Kanye West & Kid Cudi – Reborn.mp3');
	twoSong.autoplay = true;
}

let showSongThree = function () {
	console.log("Play song...");
	let threeSong = new Audio('playlist/SiR – Summer in November.mp3');
	threeSong.autoplay = true;
}

let showSongFour = function () {
	console.log("Play song...");
	let fourSong = new Audio('playlist/SiR - War.mp3');
	fourSong.autoplay = true;
}

let showSongFive = function () {
	console.log("Play song...");
	let fiveSong = new Audio('playlist/Kid Cudi - Man on the Moon.mp3');
	fiveSong.autoplay = true;
}

let showSongSix = function () {
	console.log("Play song...");
	let sixSong = new Audio('playlist/Kid Cudi - Rose Golden.mp3');
	sixSong.autoplay = true;
}

let showSongSeven = function () {
	console.log("Play song...");
	let sevenSong = new Audio('playlist/Saint Jhn – I Heard You Got Too Litt Last Night.mp3');
	sevenSong.autoplay = true;
}

let showSongEight = function () {
	console.log("Play song...");
	let eightSong = new Audio('playlist/HONNE- I Got You.mp3');
	eightSong.autoplay = true;
}

let showSongNine = function () {
	console.log("Play song...");
	let nineSong = new Audio('playlist/Jaden Smith - Icon.mp3');
	nineSong.autoplay = true;
}

let showSongTen = function () {
	console.log("Play song...");
	let tenSong = new Audio('playlist/Jaden Smith - Ghost.mp3');
	tenSong.autoplay = true;
}

let playSongOne = document.getElementById('song-1');
let playSongTwo = document.getElementById('song-2');
let playSongThree = document.getElementById('song-3');
let playSongFour = document.getElementById('song-4');
let playSongFive = document.getElementById('song-5');
let playSongSix = document.getElementById('song-6');
let playSongSeven = document.getElementById('song-7');
let playSongEight = document.getElementById('song-8');
let playSongNine = document.getElementById('song-9');
let playSongTen = document.getElementById('song-10');

playSongOne.addEventListener("click", showSongOne);
playSongTwo.addEventListener("click", showSongTwo);
playSongThree.addEventListener("click", showSongThree);
playSongFour.addEventListener("click", showSongFour);
playSongFive.addEventListener("click", showSongFive);
playSongSix.addEventListener("click", showSongSix);
playSongSeven.addEventListener("click", showSongSeven);
playSongEight.addEventListener("click", showSongEight);
playSongNine.addEventListener("click", showSongNine);
playSongTen.addEventListener("click", showSongTen);
*/

/////////////////////////////////


/*let oneSong = new Audio('playlist/Kanye West - Famous.mp3');
let twoSong = new Audio('playlist/Kanye West & Kid Cudi – Reborn.mp3');
let threeSong = new Audio('playlist/SiR – Summer in November.mp3');
let fourSong = new Audio('playlist/SiR - War.mp3');
let fiveSong = new Audio('playlist/Kid Cudi - Man on the Moon.mp3');
let sixSong = new Audio('playlist/Kid Cudi - Rose Golden.mp3');
let sevenSong = new Audio('playlist/Saint Jhn – I Heard You Got Too Litt Last Night.mp3');
let eightSong = new Audio('playlist/HONNE- I Got You.mp3');
let nineSong = new Audio('playlist/Jaden Smith - Icon.mp3');
let tenSong = new Audio('playlist/Jaden Smith - Ghost.mp3');

let nameSong = document.querySelector("label.first");	
let broadcast = document.getElementById('name-song');	
broadcast.innerText = nameSong.innerText;

let state = document.getElementById('state');
state.innerText = 'Paused...';

let turnOnSong = function () {
	oneSong.play();
	
}

let start_button = document.getElementById('button-start-pause');
start_button.onclick = turnOnSong;


let playSong = document.getElementById('playlist');

playSong.onclick = function (event) {
	console.log(event);
	if(event.target.className == 'first') {
		oneSong.play();
		let label = document.querySelector('.first');
		label.appendChild(oneSong);
		console.log(label);	
	}

	if(event.target.className == 'second') {
		twoSong.play();
		let label = document.querySelector('.second');
		label.appendChild(twoSong);
		console.log(label);	
	}

	if(event.target.className == 'third') {
		threeSong.play();
		let label = document.querySelector('.third');
		label.appendChild(threeSong);
		console.log(label);	
	}

	if(event.target.className == 'fourth') {
		fourSong.play();
		let label = document.querySelector('.fourth');
		label.appendChild(fourSong);
		console.log(label);	
	}

	if(event.target.className == 'fifth') {
		fiveSong.play();
		let label = document.querySelector('.fifth');
		label.appendChild(fiveSong);
		console.log(label);	
	}

	if(event.target.className == 'sixth') {
		sixSong.play();
		let label = document.querySelector('.sixth');
		label.appendChild(sixSong);
		console.log(label);	
	}

	if(event.target.className == 'seventh') {
		sevenSong.play();
		let label = document.querySelector('.seventh');
		label.appendChild(sevenSong);
		console.log(label);	
	}

	if(event.target.className == 'eighth') {
		eightSong.play();
		let label = document.querySelector('.eighth');
		label.appendChild(eightSong);
		console.log(label);	
	}

	if(event.target.className == 'ninth') {
		nineSong.play();
		let label = document.querySelector('.ninth');
		label.appendChild(nineSong);
		console.log(label);	
	}

	if(event.target.className == 'tenth') {
		tenSong.play();
		let label = document.querySelector('.tenth');
		label.appendChild(tenSong);
		console.log(label);	
	}

	broadcast.innerText = event.target.innerText;
	state.innerText = 'Playing...';
};
*/
//listing
let songs = [
	'Kanye West – Famous.mp3',
	'Kanye West & Kid Cudi – Reborn.mp3',
	'SiR – Summer in November.mp3',
	'Kid Cudi – Man on the Moon.mp3',
	'Kid Cudi – Rose Golden.mp3',
	'Saint Jhn – I Heard You Got Too Litt Last Night.mp3',
	'HONNE – I Got You.mp3',
	'Jaden Smith – Icon.mp3',
	'Jaden Smith – Ghost.mp3'
]

let song = new Audio (); //create <audio>
let currentSong = 0;

let state = document.getElementById('state'); // span with value playing or paused
let broadcast = document.getElementById('name-song'); //label with name song
let songSlider = document.getElementById('song-slider'); // input with time
let playOrPauseButton = document.getElementById('button-start-pause'); //button start/pause
let buttonReload = document.getElementById('button-reload'); //button reload
let playSong = document.getElementById('playlist'); // ol 
let music = document.getElementById('music'); // li with song
let currentTime = document.getElementById('current-time');
let duration = document.getElementById('duration');

window.onload = loadSong;

function loadSong () {
	console.log('playing...')
	song.src = 'playlist/' + songs[currentSong];
	let rename = songs[currentSong].split('.');
	broadcast.innerText = rename[0];
	state.innerText = 'Paused...';
	setTimeout(showDuration, 1000);
}

let startSong = function (event) {
	console.log(event);
	let playTrack = event.target.textContent;
	song.src = 'playlist/' + playTrack + '.mp3';		
	broadcast.innerText = playTrack;
	setTimeout(showDuration, 1000);
	playOrPauseSong ();
}

let updateSongSlider = function () {
	let c = Math.round(song.currentTime);
	console.log(c);
	songSlider.value = c;
	currentTime.textContent = convertTime(c);
	/*if(song.ended){
		next();
	}*/
}

function convertTime (time) {
	let min = Math.floor(time/60);
	let sec = time % 60;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
}

setInterval(updateSongSlider, 1000);

function showDuration () {
	let d = Math.floor(song.duration);
	songSlider.setAttribute("max", d);
	duration.textContent = convertTime(d);
}

function playOrPauseSong () {
	let img = document.getElementById('button-start-pause');
	if(song.paused) {
		song.play();
		img.src = "icons/pause.png";
		state.innerText = 'Playing...';
	}
	else {
		song.pause();
		img.src = "icons/play.png";
        state.innerText = 'Paused...';
	}
}

let playAgainSong = function () {
	console.log('play again...');
	song.load();
	playOrPauseSong();
	song.play();
}


playSong.onclick = startSong;
buttonReload.onclick = playAgainSong;
playOrPauseButton.onclick = playOrPauseSong;













