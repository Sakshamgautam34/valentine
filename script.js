/* --- NO BUTTON LOGIC --- */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  function moveNoButton() {
    // 1. Get Viewport Dimensions
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // 2. Get Button Dimensions
    const btnWidth = noBtn.offsetWidth || 100;
    const btnHeight = noBtn.offsetHeight || 50;

    // 3. Safety Margin (Keep it 40px away from edges)
    const margin = 40;

    // 4. Calculate Safe Zone
    const maxLeft = screenWidth - btnWidth - margin;
    const maxTop = screenHeight - btnHeight - margin;

    // 5. Generate Random Position
    const randomLeft = Math.max(margin, Math.random() * maxLeft);
    const randomTop = Math.max(margin, Math.random() * maxTop);

    // 6. Apply
    noBtn.style.position = 'fixed'; // Float above everything
    noBtn.style.left = `${randomLeft}px`;
    noBtn.style.top = `${randomTop}px`;
    noBtn.style.zIndex = "9999"; 
  }

  // Desktop
  noBtn.addEventListener("mouseover", moveNoButton);
  
  // Mobile Touch
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Stop click
    moveNoButton();
  });
  
  // Backup Click
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
document.addEventListener('mousemove', (e) => createHeart(e.clientX, e.clientY));
document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) createHeart(e.touches[0].clientX, e.touches[0].clientY);
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
