// Set the target date
    const targetDate = new Date("August 15, 2025 00:00:00").getTime();

    const daysSpan = document.getElementById("days");
    const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        daysSpan.textContent = 0;
        hoursSpan.textContent = 0;
        minutesSpan.textContent = 0;
        secondsSpan.textContent = 0;
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysSpan.textContent = days;
      hoursSpan.textContent = hours;
      minutesSpan.textContent = minutes;
      secondsSpan.textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Falling stars
    function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");

      const size = Math.random() * 15 + 10;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.background = randomColor();

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 5000);
    }

    function randomColor() {
      const colors = [
        "#1A1A1A", "#333333", "#444444", "#555555", "#0077CC", "#FF3366", "#00A86B", "#CC5500", "#6A5ACD",
        "#8B0000", "#DA70D6", "#20B2AA", "#008B8B", "#FF8C00", "#2E8B57", "#DC143C", "#4B0082", "#800080",
        "#3CB371", "#C71585"
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(createStar, 300);

    // Gift click navigation
    document.getElementById("gift").addEventListener("click", function () {
      window.location.href = "index3.html"; // Must exist in same folder
    });
    const nav = performance.getEntriesByType("navigation")[0];
  if (nav && nav.type === "reload") {
    // Go back to previous page on refresh
    window.history.back();
  }
  