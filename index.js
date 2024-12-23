let play = document.getElementById("playButton");
let next = document.getElementById("nextButton");
let reset = document.getElementById("resetButton");
let pause = document.getElementById("pauseButton");
let myAudio = document.getElementById('myAudio');
let myArtist = document.getElementById("myArtist");
let myTitle = document.getElementById("myTitle");
let myImage = document.getElementById("myImage");
let currentIndex = 0;

let playlist = [{
    song: "./music/sweet.mp3",
    artist: "Rheyr",
    title: "Sweet",
    image: "./images/sweet.png"
},
{
    song: "./music/kurse.mp3",
    artist: "Axgxst",
    title: "Kurse",
    image: "./images/kurse.png"
},
{
    song: "./music/bruh.mp3",
    artist: "bruhmanegodr",
    title: "?",
    image: "./images/bruhmanegod.png"
}]



play.addEventListener("click", ()=> {
    myAudio.play()
})

function updateTrack() {
    const track = playlist[currentIndex];
    myArtist.textContent = track.artist;
    myTitle.textContent = track.title;
    myImage.src = track.image;
    myAudio.src = track.song;
    myAudio.load();
    myAudio.play();
}

next.addEventListener("click", ()=> {
    currentIndex = (currentIndex + 1) % playlist.length;
    updateTrack()
})

updateTrack()



play.addEventListener("click", ()=> {
    myAudio.play()
})