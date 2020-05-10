var audio = document.getElementById("audio");
var play = document.getElementById("play");
var list = ["canon.mp3", "dream.mp3", "hero.mp3", "mombasa.mp3", "swan-lake.mp3"]

var currentSong = 0;

audio.addEventListener("ended", function(e) {
    if (currentSong <= list.length - 1) {
        currentSong++;
    } else if (currentSong == list.length - 1) {
        currentSong = 0;
    } else {
        currentSong = 0;
    }
    audio.src = list[currentSong];
})
play.addEventListener("click", function(e) {
    if (currentSong <= list.length - 1) {
        currentSong++;
    } else if (currentSong == list.length - 1) {
        currentSong = 0;
    } else {
        currentSong = 0;
    }
    audio.src = list[currentSong];
    audio.play()
})

$("#mp-audio-list li").on("click", function(e) {
    var Itemid = e.target.id;
    var sourceid = Itemid + ".mp3";
    audio.src = sourceid;
    audio.play();

})