const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const message = document.getElementById('message');
const gifContainer = document.getElementById('gif-container');

noBtn.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
  message.textContent = 'Hai preso la decisione migliore!';
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

// Funzione per creare baci che appaiono e scompaiono
function createKiss() {
  const kiss = document.createElement('div');
  kiss.classList.add('kiss');
  kiss.style.left = Math.random() * window.innerWidth + 'px';
  kiss.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(kiss);

  setTimeout(() => {
    kiss.remove();
  }, 3000);
}

setInterval(createHeart, 700);
setInterval(createKiss, 1500);
