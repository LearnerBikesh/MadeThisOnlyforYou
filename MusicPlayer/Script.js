const play = document.getElementById("play");
const music = document.querySelector("audio");
const imgEl = document.querySelector("img");
const titleEl = document.getElementById("title");
const artistEl = document.getElementById("artist");
const preEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
const progressEl = document.querySelector(".progress");
const currentTimeEl = document.querySelector(".current-time");
const durationEl = document.querySelector(".duration");
const progressDivEl = document.querySelector(".progress-div");
const repeatPlistEl = document.querySelector("#repeat-plist");

const musicList = document.querySelector("#music-list");
const musicListContainer = document.querySelector(".music-list-container");

const closeEl = document.querySelector("#close");
const ulEl = document.querySelector("ul");
let tempIndex = 0;
// lists of songs
const songs = [
  {
    name: "music-1",
    image: "img-1",
    title: "Dhadak",
    artist: "Ajay-Atul",
  },
  {
    name: "music-2",
    image: "img-2",
    title: "Lo Safar",
    artist: "jubin nautiyal",
  },
  {
    name: "music-3",
    image: "img-3",
    title: "aj se teri",
    artist: "arijit singh",
  },
  {
    name: "music-4",
    image: "img-4",
    title: "Kaun tujhe",
    artist: "Amaal Mallik",
  },
  {
    name: "music-5",
    image: "img-5",
    title: "Sanam Re",
    artist: "Arijit Singh",
  },
  {
    name: "music-6",
    image: "img-6",
    title: "Hothon Se",
    artist: "Mohammed Irfan",
  },
  {
    name: "music-7",
    image: "img-7",
    title: "lag ja gale",
    artist: "Sanam",
  },
  {
    name: "music-8",
    image: "img-8",
    title: "Suadebaazi",
    artist: "Pritam Irshad Kamil",
  },
  {
    name: "music-9",
    image: "img-9",
    title: "Khairiyat",
    artist: "Arijit Singh",
  },
  {
    name: "music-10",
    image: "img-10",
    title: "Pal",
    artist: "Arijit Singh",
  },
  {
    name: "music-11",
    image: "img-11",
    title: "Tum Hi Aana",
    artist: "Jubin nautiyal",
  },
  {
    name: "music-12",
    image: "img-12",
    title: "Hiriye",
    artist: "Shael Oswal",
  },
  {
    name: "music-13",
    image: "img-13",
    title: "Tum mere ho",
    artist: "Jubin nautiyal",
  },
  {
    name: "music-14",
    image: "img-14",
    title: "Mera pyar tera pyar",
    artist: "Arijit singh",
  },
  {
    name: "music-15",
    image: "img-15",
    title: "Dil Me ho tum",
    artist: "Arman Mallik",
  },
  {
    name: "music-16",
    image: "img-16",
    title: "fhir miloge na",
    artist: "jal raj",
  },
  {
    name: "music-17",
    image: "img-17",
    title: "Tera Zikr",
    artist: "Darshan Raval",
  },
  {
    name: "music-18",
    image: "img-18",
    title: "Kitni chahat",
    artist: "Wafa Ali",
  },
  {
    name: "music-19",
    image: "img-19",
    title: "diwana hua badal",
    artist: "Mohammad rafi",
  },
  {
    name: "music-20",
    image: "img-20",
    title: "chehra hai ya chaand",
    artist: "kishor kumar",
  },
];

let playing = false;
// play.addEventListener("click", startStop);

// to toggle pause and play
function startStop() {
  if (playing) {
    pauseMusic();
  } else {
    playMusic();
  }
}

// to play song
function playMusic() {
  playing = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  imgEl.classList.add("anime");
}

// to pause song
function pauseMusic() {
  playing = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  imgEl.classList.remove("anime");
}

let index = 0;

// to load song, artist name , song title, image
function loadMusic(song) {
  music.src = "music/" + song.name + ".mp3";
  // console.log(`images/song-${song.image}.jpg`);
  
    imgEl.src = `images/song-${song.image}.jpg`;
    imgEl.setAttribute("onerror" , "addDefaultImg(imgEl)");
  
  titleEl.textContent = song.title;
  artistEl.textContent = song.artist;
  // playMusic();
}

function addDefaultImg(imgEl){
  imgEl.src = `images/song-default${Math.floor(Math.random()*8 + 1)}.jpg`;
}
// to play previous song
function prevMusic() {
  index = (index - 1 + songs.length) % songs.length;
  loadMusic(songs[index]);
  addRemovePlaying(--tempIndex);
  playMusic();
}

// to play next song
function nextMusic() {
  index = (index + 1) % songs.length;
  loadMusic(songs[index]);
  addRemovePlaying(++tempIndex);
  playMusic();
}
loadMusic(songs[index]);

music.addEventListener("timeupdate", (e) => {
  // const duration = e.srcElement.duration;
  // const currentTime = e.srcElement.currentTime;
  // the above can also be done as
  const { currentTime, duration } = e.srcElement;
  let progress_time = (currentTime / duration) * 100;
  progressEl.style.width = `${progress_time}%`;

  currentTimeEl.textContent = `${currentTime}`;

  // changing currentTime of the song
  let min_current = Math.floor(currentTime / 60);
  let sec_current = Math.floor(currentTime % 60);

  if (min_current < 10) {
    min_current = `0${min_current}`;
  }
  if (sec_current < 10) {
    sec_current = `0${sec_current}`;
  }

  currentTimeEl.textContent = `${min_current}:${sec_current}`;

  // changing duration of the song
  let min_duration = Math.floor(duration / 60);
  let sec_duration = Math.floor(duration % 60);

  if (min_duration < 10) {
    min_duration = `0${min_duration}`;
  }
  if (sec_duration < 10) {
    sec_duration = `0${sec_duration}`;
  }

  durationEl.textContent = `${min_duration}:${sec_duration}`;
});

progressDivEl.addEventListener("click", (e) => {
  let duration = music.duration;
  let currentTime = music.currentTime;
  let width = progressDivEl.clientWidth;
  const move = (e.offsetX / width) * duration;
  music.currentTime = move;
  playMusic();
});

// music.addEventListener('ended' , nextMusic);
preEl.addEventListener("click", prevMusic);
nextEl.addEventListener("click", nextMusic);

// to change icons of loop , repeat , shuffle
repeatPlistEl.addEventListener("click", () => {
  let innerText = repeatPlistEl.innerText;

  switch (innerText) {
    case "repeat":
      repeatPlistEl.innerText = "repeat_one"; // this will change the icon to repeat-one , google font me aaise hi hota hai
      repeatPlistEl.setAttribute("title", "looped");
      break;

    case "repeat_one":
      repeatPlistEl.innerText = "shuffle";
      repeatPlistEl.setAttribute("title", "shuffling");
      break;
    case "shuffle":
      repeatPlistEl.innerText = "repeat";
      repeatPlistEl.setAttribute("title", "looped");
      break;
  }
});

// to do according the loop , looped one and shuffle icon
music.addEventListener("ended", () => {
  let innerText = repeatPlistEl.innerText;
  switch (innerText) {
    case "repeat":
      nextMusic();
      break;

    case "repeat_one":
      loadMusic(songs[index]);
      playMusic();
      break;

    case "shuffle":
      let rand = Math.floor(Math.random() * songs.length);
      console.log(rand);
      while (index == rand) {
        console.log(`${index} inside while`);
        console.log(`${rand} inside while`);
        rand = Math.floor(Math.random() * songs.length);
      }
      console.log(`${rand} outside while`);
      index = rand;
      loadMusic(songs[index]);
      playMusic();
      break;
  }
});

// Showing music lists
musicList.addEventListener("click", () => {
  musicListContainer.classList.add("show");
});

// closing music list
closeEl.addEventListener("click", () => {
  musicListContainer.classList.remove("show");
});

// inserting dynamic song list
for (let i = 0; i < songs.length; i++) {
  let liTag = `<li li-index = ${i} class="flex">
                  <div class="row flex">
                      <span>${songs[i].title}</span>
                      <p>${songs[i].artist}</p>
                  </div>
                  <audio class = "${songs[i].name}" src = "music/${songs[i].name}.mp3"></audio>
                  <span  id = "${songs[i].name}" class="audio-duration">03:30</span>
              </li>`;
  const audioDurationEl = ulEl.querySelector(".audio-duration");
  ulEl.insertAdjacentHTML("beforeend", liTag);

  let liAudioDuration = ulEl.querySelector(`#${songs[i].name}`);
  let lidAudioTag = ulEl.querySelector(`.${songs[i].name}`);

  lidAudioTag.addEventListener("loadeddata", () => {
    let audioDuration = lidAudioTag.duration;
    let min = Math.floor(audioDuration / 60);
    let sec = Math.floor(audioDuration % 60);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    liAudioDuration.innerText = `${min}:${sec}`;
  });
}

const allLiTag = document.querySelectorAll("li");
for (let i = 0; i < allLiTag.length; i++) {
  allLiTag[i].setAttribute("onclick", "clicked(this)");
}

let preLiPlaying = 0;
allLiTag[0].classList.add("playing");
function clicked(ele) {
  let liIndex = Number(ele.getAttribute("li-index"));

  // we are using preLiPlaying and currentLiPlaying to add and remove playing class into the song list
  let currentLiPlaying = liIndex;
  addRemovePlaying(liIndex);
  tempIndex = liIndex;
  // console.log(liIndex);
  index = liIndex;
  // console.log(index);
  loadMusic(songs[index]);
  playMusic();
}

function addRemovePlaying(liIndex) {
  let currentLiPlaying = liIndex;
  if (preLiPlaying != currentLiPlaying) {
    let audioTagElA =
      allLiTag[currentLiPlaying].querySelector(".audio-duration");
    let audioTagElB = allLiTag[preLiPlaying].querySelector(".audio-duration");
    audioTagElA.style.display = "none";
    audioTagElB.style.display = "contents";
    allLiTag[currentLiPlaying].classList.add("playing");
    allLiTag[preLiPlaying].classList.remove("playing");
    preLiPlaying = currentLiPlaying;
  }
}
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextMusic();
  } else if (e.key === "ArrowLeft") {
    prevMusic();
  } else if (e.key === " ") {
    startStop();
  }
});
