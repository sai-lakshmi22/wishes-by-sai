function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = ['💗', '💜', '💛', '❤', '💖'][Math.floor(Math.random() * 5)];
  
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);

setTimeout(() => {
  window.location.href = "index2.html"; // change to your next page URL
}, 5000);
