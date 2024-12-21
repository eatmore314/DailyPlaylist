let next = document.getElementById("nextButton");
let myAudio = document.getElementById("myAudio");
let currentIndex = 0;

let playlist = [{
    song: "./music/bruh.mp3"
},
{
    song: "./music/sweet.mp3"
},
{
    song: "./music/kurse.mp3"
}]

function updateTrack() {
    const track = playlist[currentIndex];
    myAudio.src = track.song;
    myAudio.load();
    myAudio.play();

}

next.addEventListener("click", ()=> {
    currentIndex = (currentIndex + 1) % playlist.length;
    updateTrack()
})

updateTrack()