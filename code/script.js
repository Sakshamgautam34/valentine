// Get the "NO" button
const noBtn = document.getElementById("noBtn");

// Function to move the button randomly
function moveNoButton() {
  const maxX = window.innerWidth - 120;
  const maxY = window.innerHeight - 60;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Move on mouse hover (desktop)
noBtn.addEventListener("mouseover", moveNoButton);

// Move on touch (mobile)
noBtn.addEventListener("touchstart", moveNoButton);

// YES button action
function goLove() {
  window.location.href = "love.html";
}