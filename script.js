let songItem=0;
let audioElement=new Audio("song/3.mp3");
let playButton=document.getElementById("playButton");
let progressBar=document.getElementById("rangeId");
let gif=document.getElementById("gifId");
let currentSong=document.getElementById("currentSong");
let songItems=Array.from(document.getElementsByClassName("songList"));
// song item
let song=[
    {songname:"ai meghla", filePath:"song/1.mp3", coverPath:"cover/image1.jpeg"},
    {songname:"amplifier", filePath:"song/2.mp3", coverPath:"cover/image2.jpeg"},
    {songname:"dholida", filePath:"song/3.mp3", coverPath:"cover/image3.jpeg"},
    {songname:"tu itni khubsurat", filePath:"song/4.mp3", coverPath:"cover/image4.jpeg"},
    {songname:"o mahi ve", filePath:"song/5.mp3", coverPath:"cover/image5.jpeg"},
    {songname:"mon bebagi", filePath:"song/6.mp3", coverPath:"cover/image6.jpeg"},
    {songname:"suchorita", filePath:"song/7.mp3", coverPath:"cover/image7.jpeg"},
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
     element.getElementsByTagName("img")[0].src=song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songname;
})
playButton.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        // console.log("audioble");
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        console.log("paused");
        playButton.classList.remove('fa-circle-pause');
        playButton.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    progressBar.value=progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})
const musicPlayButton=()=>{
    Array.from(document.getElementsByClassName('musicPlay')).forEach((element)=>{
        element.classList.remove('fa-regular', 'fa-circle-pause');
        element.classList.add('fa-regular', 'fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('musicPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        musicPlayButton();
        songItem=parseInt(e.target.id);
        e.target.classList.remove('fa-regular', 'fa-circle-play');
        e.target.classList.add('fa-regular', 'fa-circle-pause');
        audioElement.src=`song/${songItem}.mp3`;
        currentSong.innerText=song[songItem].songname;
        audioElement.currentTime=0;
        audioElement.play();
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
    });
});
document.getElementById("next").addEventListener('click',()=>{
    if(songItem>=7){
        songItem=1;
    }
    else{
        songItem+=1;
    }
        audioElement.src=`song/${songItem}.mp3`;
        currentSong.innerText=song[songItem].songname;
        audioElement.currentTime=0;
        audioElement.play();
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
})
document.getElementById("previous").addEventListener('click',()=>{
    if(songItem<=1){
        songItem=7;
        console.log(songItem);
    }
    else{
        songItem-=1;
        console.log(songItem);
    }
        audioElement.src=`song/${songItem}.mp3`;
        songName.innerText=song[songItem].songname;
        audioElement.currentTime=0;
        audioElement.play();
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
})