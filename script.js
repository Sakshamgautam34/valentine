// Get the "NO" button
const noBtn = document.getElementById("noBtn");

// Function to move the button randomly
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // IMPORTANT: This line fixes the "disappearing" issue
  noBtn.style.position = 'fixed'; 
  
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Move on mouse hover (desktop)
noBtn.addEventListener("mouseover", moveNoButton);

// Move on touch (mobile)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevents clicking it by accident
    moveNoButton();
});

// YES button action
function goLove() {
  window.location.href = "love.html";
}
