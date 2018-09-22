let showSongOne = function () {
	console.log("Play song...");
	let oneSong = new Audio('playlist/Kanye West - Famous.mp3');
	oneSong.autoplay = true;
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

