/* --- NO BUTTON LOGIC --- */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  // Function to move the button randomly within SAFE bounds
  function moveNoButton() {
    // 1. Get current button size (fallback to 100x50 if not loaded yet)
    const btnWidth = noBtn.offsetWidth || 100;
    const btnHeight = noBtn.offsetHeight || 40;

    // 2. Get screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // 3. Calculate Safe Zone (Keep 20px away from all edges)
    // The button can go from X=20 to X=(Screen - Button - 20)
    const minX = 20;
    const maxX = screenWidth - btnWidth - 20;
    
    const minY = 20;
    const maxY = screenHeight - btnHeight - 20;

    // 4. Generate random position within safe zone
    // Math.max ensures we never get a negative number (off-screen left/top)
    const randomX = Math.max(minX, Math.random() * (maxX - minX) + minX);
    const randomY = Math.max(minY, Math.random() * (maxY - minY) + minY);

    // 5. Apply the new position
    noBtn.style.position = 'fixed'; // vital for moving freely
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    
    // 6. Ensure it stays on top
    noBtn.style.zIndex = "9999"; 
  }

  // Move on hover (desktop)
  noBtn.addEventListener("mouseover", moveNoButton);
  
  // Move on touch (mobile)
  noBtn.addEventListener("touchstart", (e) => {
      e.preventDefault(); // Stop the 'click' from happening
      moveNoButton();
  });
  
  // Backup: If they somehow manage to click it
  noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      moveNoButton();
  });
}

// Redirect for YES button
function goLove() {
  window.location.href = "love.html";
}

/* --- MAGIC TOUCH TRAIL (Heart rain on touch) --- */
document.addEventListener('mousemove', function(e) {
  createHeart(e.clientX, e.clientY);
});

document.addEventListener('touchmove', function(e) {
  // Only create hearts for the first finger to save performance
  if(e.touches.length > 0) {
    const touch = e.touches[0];
    createHeart(touch.clientX, touch.clientY);
  }
});

function createHeart(x, y) {
  const body = document.querySelector('body');
  const heart = document.createElement('span');
  
  // Random size between 10px and 25px
  const size = Math.random() * 15 + 10; 
  
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  
  // Styling the heart
  heart.style.position = 'fixed';
  heart.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/512/210/210545.png")';
  heart.style.backgroundSize = 'cover';
  heart.style.pointerEvents = 'none'; 
  heart.style.transform = 'translate(-50%, -50%)';
  heart.style.zIndex = '9999';
  heart.style.animation = 'fadeOut 1s linear';
  
  body.appendChild(heart);

  // Remove heart after 1 second
  setTimeout(() => {
    heart.remove();
  }, 1000);
}

// Inject keyframes for the heart trail animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeOut {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -150%) scale(0); opacity: 0; }
  }
`;
document.head.appendChild(style);
