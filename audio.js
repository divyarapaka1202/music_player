let play=document.getElementById("play");
let audio=document.getElementById("audio");
let next=document.getElementById("next");
let prev=document.getElementById("prev");
let volumeup=document.getElementById("volumeup");
let volumedown=document.getElementById("volumedown");
let img=document.getElementById("img");
let name1=document.getElementById("name1")
let progress=document.getElementById("progress");
let duration=document.getElementById("duration");
let currtime=document.getElementById("currtime");

let currind=0;
function formatTime(seconds)
{
    let min=Math.floor(seconds/60);
    let sec=Math.floor(seconds%60);
    sec=(sec<10? '0'+sec:sec);
    return `${min}:${sec}`;
};
audio.addEventListener("loadedmetadata",function(){
    duration.textContent=formatTime(audio.duration);
});

audio.addEventListener("timeupdate",function(){
    currtime.textContent=formatTime(audio.currentTime);
    progress.value=audio.currentTime;
    if(audio.duration)
    {
        progress.max=audio.duration;
    }
});
progress.addEventListener("input",function(){
    audio.currentTime=progress.value;
});

let tracks=[
    "Way-Maker.mp3",
    "stayalive.mp3",
    "deevinchave.mp3"
];

let names=[
    "way maker",
    "stay alive",
    "devinchave"
];
let images=[
    "waymaker.png",
    "stayalive.jpeg",
    "deevinchave.jpeg"
];
audio.src=tracks[currind];
img.src=images[currind];
name1.textContent=names[currind];

next.addEventListener("click",function(event){
    currind++;
    if(currind>=tracks.length)
    {
        currind=0;
    }
    audio.src=tracks[currind];
    img.src=images[currind];
    name1.textContent=names[currind];
    audio.play();
   
})
prev.addEventListener("click",function(event){
    currind--;
    if(currind<0)
    {
        currind=tracks.length-1;
    }
    audio.src=tracks[currind];
    img.src=images[currind];
    name1.textContent=names[currind];
    audio.play();

})
play.addEventListener("click",function(event){
    if(audio.paused){
        audio.play();
        play.textContent="Pause";
        img.classList.add("rotate");
    }
    else{
        audio.pause();
        play.textContent="Play";
        img.classList.remove("rotate");

    }
});

volumeup.addEventListener("click",function(){
    if(audio.volume<1)
    {
        audio.volume+=0.1;
    }
    if(audio.volume>1)
    {
        audio.volume=1;
    }
});

volumedown.addEventListener("click",function(){
    if(audio.volume>0)
    {
        audio.volume -=0.1;
    }
    if(audio.volume<0)
    {
        audio.volume=0;
    }
});

audio.addEventListener("ended",function(){
    next.click();
});