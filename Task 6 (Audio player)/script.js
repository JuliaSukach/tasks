let songs = [
	'Kanye West – Famous.mp3',
	'Kanye West & Kid Cudi – Reborn.mp3',
	'SiR – Summer in November.mp3',
	'SiR – War.mp3',
	'Kid Cudi – Man on the Moon.mp3',
	'Kid Cudi – Rose Golden.mp3',
	'Saint Jhn – I Heard You Got Too Litt Last Night.mp3',
	'HONNE – I Got You.mp3',
	'Jaden Smith – Icon.mp3',
	'Jaden Smith – Ghost.mp3'
]

let song = new Audio ();
song.id = 'track'; //create <audio>
song.className = 'trackTime';
let currentSong = 0;

let state = document.getElementById('state'); // span with value playing or paused
let broadcast = document.getElementById('name-song'); //label with name song
let songSlider = document.getElementById('song-slider'); // input with time
let volumeSlider = document.getElementById('volumeControl'); // input with time
let playOrPauseButton = document.getElementById('button-start-pause'); //button start/pause
let buttonReload = document.getElementById('button-reload'); //button reload
let buttonNext = document.getElementById('button-next');// button next track
let buttonPrevious = document.getElementById('button-previous');
let buttonVolume = document.getElementById('button-volume');
let playSong = document.getElementById('playlist'); // ol 
let music = document.getElementById('music'); // li with song
let currentTime = document.getElementById('current-time');
let duration = document.getElementById('duration');

window.onload = loadSong;

function loadSong () {
	console.log(songs[currentSong]);
	song.src = `playlist/${ songs[currentSong] }`;//'playlist/' + songs[currentSong];
	let rename = songs[currentSong].split('.');
	broadcast.innerText = rename[0];
	state.innerText = 'Paused...';
	let colorsArray = [
		'green',
		'red',
		'yellow'
	]
	let randomShape = Math.floor(Math.random()*3);
	console.log(colorsArray[0]);
}

let startSong = function (event) {
	let playTrack = event.target.textContent;
	let number = songs.indexOf(`${ playTrack }.mp3`);
	currentSong = number;
	song.src = `playlist/${ songs[currentSong] }`;
	broadcast.innerText = playTrack;
	playOrPauseSong ();
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
	song.load();
	playOrPauseSong();
	song.play();
}

let nextSong = function () {
	song.src = `playlist/${ songs[currentSong+1] }`;
	song.play();
	let rename = songs[currentSong+1].split('.');
	broadcast.innerText = rename[0];
	currentSong = ++currentSong || currentSong++ ;
}

let previousSong = function () {
	song.src = `playlist/${ songs[currentSong -1] }`;
	song.play();
	let rename = songs[currentSong-1].split('.');
	broadcast.innerText = rename[0];
	currentSong = --currentSong;
}

let muteSong = function () {
	if (song.volume) {
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

let durationFunc = function () {
    //set duration
 	let d = Math.floor(song.duration);
	songSlider.setAttribute("max", d);
	duration.textContent = convertTime(d);
}

let currentFunc = function () {
    //set current time
	let c = Math.round(song.currentTime);
	songSlider.value = c;
	currentTime.textContent = convertTime(c);
}

function convertTime (time) {
	let min = Math.floor(time/60);
	let sec = time % 60;
	if (min < 10) {
		min = '0' + min;
	}
	sec = (sec < 10) ? `0${ sec }`:sec;
	return (`${ min } : ${ sec }`);
}

let changeTimeSong = function () {
	song.currentTime = songSlider.value;
}

let changeVolume = function () {
	song.volume = volumeSlider.value;
}

volumeSlider.addEventListener('click', changeVolume);
songSlider.addEventListener('click', changeTimeSong);
song.addEventListener('loadedmetadata', durationFunc);
song.addEventListener('timeupdate', currentFunc);
song.addEventListener('ended', nextSong);
buttonNext.addEventListener('click', nextSong);
buttonPrevious.addEventListener('click', previousSong);
playSong.onclick = startSong;
buttonReload.onclick = playAgainSong;
buttonVolume.onclick = muteSong;
playOrPauseButton.onclick = playOrPauseSong;















