// Falling hearts animation
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '💕';
  heart.style.position = 'absolute';
  heart.style.fontSize = Math.random() * 20 + 20 + 'px';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = '-20px';
  heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);

// Music play/pause button
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🎶 Play Our Song";
  } else {
    music.play();
    musicBtn.textContent = "⏸ Pause Our Song";
  }
  isPlaying = !isPlaying;
});

// Add keyframes for falling hearts
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);