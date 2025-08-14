function revealMessage() {
  document.getElementById("birthdayCard").style.display = "none"; // Hide the card
  document.getElementById("message2").style.display = "block"; // Show second message above

  // Show the second message ABOVE the first one without moving it
  const msg2 = document.getElementById("message2");
  msg2.style.display = "block";
  msg2.style.position = "relative"; 
  msg2.style.marginTop = "20px"; // spacing from top
}

// Confetti animation
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
// Bright vibrant colors for light pink background
const colors = ['#ff0000', '#ff6600', '#ffcc00', '#00cc00', '#00cccc', '#0066ff', '#9900ff', '#ff0099'];

for (let i = 0; i < 50; i++) {
  confetti.push({
    // Keep away from center horizontally (text area)
    x: Math.random() < 0.5
      ? Math.random() * (canvas.width * 0.3) // left side
      : Math.random() * (canvas.width * 0.3) + canvas.width * 0.7, // right side

    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 5 + 2,
    d: Math.random() * 1.2 + 0.6, // slightly faster fall
    color: colors[Math.floor(Math.random() * colors.length)],
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
    ctx.fillStyle = c.color;
    ctx.fill();
  });

  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += c.d; // slightly faster fall
    if (c.y > canvas.height) {
      c.y = -c.r;
      // Respawn away from text center
      c.x = Math.random() < 0.5
        ? Math.random() * (canvas.width * 0.3)
        : Math.random() * (canvas.width * 0.3) + canvas.width * 0.7;
    }
  });
}

drawConfetti();

    function goToMemories() {
      // Replace with your actual next page
      window.location.href = "memories.html";
    }

