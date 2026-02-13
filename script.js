/* --- NO BUTTON LOGIC --- */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  // Function to move the button randomly
  function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // Fixed position ensures it doesn't disappear off-screen
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // Move on hover (desktop)
  noBtn.addEventListener("mouseover", moveNoButton);
  
  // Move on touch (mobile) - prevent default click
  noBtn.addEventListener("touchstart", (e) => {
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
  const touch = e.touches[0];
  createHeart(touch.clientX, touch.clientY);
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
