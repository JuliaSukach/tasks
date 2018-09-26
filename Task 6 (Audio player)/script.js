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

let song = new Audio ();
song.id = 'track'; //create <audio>
console.log(song);
let currentSong = 0;

let state = document.getElementById('state'); // span with value playing or paused
let broadcast = document.getElementById('name-song'); //label with name song
let songSlider = document.getElementById('song-slider'); // input with time
let volumeSlider = document.getElementById('volumeControl'); // input with time
let playOrPauseButton = document.getElementById('button-start-pause'); //button start/pause
let buttonReload = document.getElementById('button-reload'); //button reload
let buttonNext = document.getElementById('button-next');// button next track
let buttonVolume = document.getElementById('button-volume');
let playSong = document.getElementById('playlist'); // ol 
let music = document.getElementById('music'); // li with song
let currentTime = document.getElementById('current-time');
let duration = document.getElementById('duration');
let audio = document.getElementById('track');

window.onload = loadSong;

function loadSong () {
	console.log('playing...');
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
	song.volume = 0.5;
	if(song.paused) {
		song.play();
		playOrPauseButton.src = "icons/pause.png";
		state.innerText = 'Playing...';
	}
	else {
		song.pause();
		playOrPauseButton.src = "icons/play.png";
        state.innerText = 'Paused...';
	}
}

let playAgainSong = function () {
	console.log('play again...');
	song.load();
	playOrPauseSong();
	song.play();
}

/*let nextSong = function () {
	console.log('Next song...');
}*/

let volumeSong = function (amount) {
	console.log('Change volume...');
    song.volume == volumeSlider.value; //it doesn't work
}

let muteSong = function () {
	if (song.volume != 0) {
		song.volume = 0;
		buttonVolume.src = "icons/mute.png";
		volumeSlider.value = 0;
	}
	else {
		song.volume = 0.5;
		buttonVolume.src = "icons/volume.png";
		volumeSlider.value = 0.5;
	}
	
}

volumeSlider.oninput = volumeSong;
//buttonNext.onclick = nextSong;
playSong.onclick = startSong;
buttonReload.onclick = playAgainSong;
buttonVolume.onclick = muteSong;
playOrPauseButton.onclick = playOrPauseSong;













