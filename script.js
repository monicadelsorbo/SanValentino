const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const message = document.getElementById('message');
const gifContainer = document.getElementById('gif-container');

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 10;
  const maxY = window.innerHeight - noBtn.offsetHeight - 10;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener('click', () => {
  message.textContent = 'Evvaii, miglior decisione che hai preso!';
  gifContainer.innerHTML = '<img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="Festeggiamenti" />';
  yesBtn.disabled = true;
  noBtn.remove();
});

// Funzione per creare cuoricini che salgono
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 20 + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 700);
