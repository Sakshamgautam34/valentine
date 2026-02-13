/* --- NO BUTTON LOGIC --- */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  function moveNoButton() {
    // 1. Get Screen Size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // 2. Get Button Size (Defaults if not loaded)
    const btnWidth = noBtn.offsetWidth || 100;
    const btnHeight = noBtn.offsetHeight || 50;

    // 3. Define Safe Zone (Keep 20px away from edges)
    const padding = 20;
    const maxX = screenWidth - btnWidth - padding;
    const maxY = screenHeight - btnHeight - padding;

    // 4. Generate Random Position
    // Math.max(padding, ...) ensures it doesn't go off the left/top
    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);

    // 5. Apply Position
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = "9999"; 
  }

  // Events
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", (e) => { e.preventDefault(); moveNoButton(); });
  noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNoButton(); });
}

/* --- YES BUTTON REDIRECT --- */
function goLove() {
  window.location.href = "love.html";
}

/* --- MAGIC HEART TRAIL --- */
document.addEventListener('touchmove', function(e) {
    if(e.touches.length > 0) {
      const touch = e.touches[0];
      createHeart(touch.clientX, touch.clientY);
    }
});

document.addEventListener('mousemove', function(e) {
  createHeart(e.clientX, e.clientY);
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
