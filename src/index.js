import './css/style.css';
import cover_img from './assets/images/hey.jpg';
// import song1 from './assets/music/hey.mp3';
import SONGS from './assets/music/index';

let audio = new Audio();

const list = document.getElementById('list');
list.addEventListener('click', (e) => {
  console.log(e.target.id);
  console.log(SONGS[e.target.id]);
  audio.src = SONGS[e.target.id].song;
  audio.play();
});
const musicCard = (song, _) => {
  const card = document.createElement('div');

  card.setAttribute('id', _);
  card.style = `
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: 10px;
    `;
  const title = document.createElement('h3');
  title.innerText = song.title;
  const cover = document.createElement('img');
  cover.src = song.cover;
  cover.style = `
        width: 100px;
        height: 100px;
        object-fit: cover;
        `;
  card.appendChild(cover);
  card.appendChild(title);

  list.appendChild(card);
};

for (const song in SONGS) {
  musicCard(SONGS[song], song);
}

const cover = document.querySelector('#cover');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');

cover.src = cover_img;

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
  }
});
