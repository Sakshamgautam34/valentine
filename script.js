/* --- NO BUTTON LOGIC --- */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  function moveNoButton() {
    // 1. Get exact button size (or guess if not rendered yet)
    const btnWidth = noBtn.offsetWidth || 100;
    const btnHeight = noBtn.offsetHeight || 50;

    // 2. Calculate Screen Bounds
    // We stay 30px away from the edges to be safe
    const limitX = window.innerWidth - btnWidth - 30;
    const limitY = window.innerHeight - btnHeight - 30;

    // 3. Generate Random Position
    // Math.max(30, ...) ensures we don't spawn too far left/top
    const randomX = Math.max(30, Math.random() * limitX);
    const randomY = Math.max(30, Math.random() * limitY);

    // 4. Apply Position
    noBtn.style.position = 'fixed'; // Float above everything
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    
    // 5. Ensure it's on top
    noBtn.style.zIndex = "9999"; 
  }

  // Move on Desktop (Hover)
  noBtn.addEventListener("mouseover", moveNoButton);
  
  // Move on Mobile (Touch)
  noBtn.addEventListener("touchstart", (e) => {
      e.preventDefault(); 
      moveNoButton();
  });
  
  // Backup Click (if they are fast)
  noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      moveNoButton();
  });
}

/* --- YES BUTTON REDIRECT --- */
function goLove() {
  window.location.href = "love.html";
}

/* --- MAGIC HEART TRAIL --- */
// Only add hearts if we are interactive
document.addEventListener('mousemove', function(e) {
  createHeart(e.clientX, e.clientY);
});

document.addEventListener('touchmove', function(e) {
    if(e.touches.length > 0) {
      const touch = e.touches[0];
      createHeart(touch.clientX, touch.clientY);
    }
});

function createHeart(x, y) {
  const body = document.querySelector('body');
  const heart = document.createElement('span');
  const size = Math.random() * 15 + 10; 
  
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.position = 'fixed';
  heart.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/512/210/210545.png")';
  heart.style.backgroundSize = 'cover';
  heart.style.pointerEvents = 'none'; 
  heart.style.transform = 'translate(-50%, -50%)';
  heart.style.zIndex = '9999';
  heart.style.animation = 'fadeOut 1s linear';
  
  body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 1000);
}

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeOut {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -150%) scale(0); opacity: 0; }
  }
`;
document.head.appendChild(style);
