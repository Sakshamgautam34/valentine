{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Get the "NO" button\
const noBtn = document.getElementById("noBtn");\
\
// Function to move the button randomly\
function moveNoButton() \{\
  const maxX = window.innerWidth - 120;\
  const maxY = window.innerHeight - 60;\
\
  const x = Math.random() * maxX;\
  const y = Math.random() * maxY;\
\
  noBtn.style.left = `$\{x\}px`;\
  noBtn.style.top = `$\{y\}px`;\
\}\
\
// Move on mouse hover (desktop)\
noBtn.addEventListener("mouseover", moveNoButton);\
\
// Move on touch (mobile)\
noBtn.addEventListener("touchstart", moveNoButton);\
\
// YES button action\
function goLove() \{\
  window.location.href = "love.html";\
\}}