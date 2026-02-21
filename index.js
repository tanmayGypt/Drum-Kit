// Map keys to sound files
const soundMap = {
  'w': './sounds/snare.mp3',
  'a': './sounds/tom-1.mp3',
  's': './sounds/tom-2.mp3',
  'd': './sounds/kick-bass.mp3',
  'j': './sounds/tom-3.mp3',
  'k': './sounds/tom-4.mp3',
  'l': './sounds/crash.mp3'
};

// Play sound and animate button
function playSound(key) {
  const soundFile = soundMap[key];
  if (!soundFile) return;

  // Play audio
  const audio = new Audio(soundFile);
  audio.play().catch(err => console.log('Audio play failed:', err));

  // Animate button
  const button = document.querySelector(`.drum-pad.${key}`);
  if (button) {
    button.classList.add('pressed');
    setTimeout(() => {
      button.classList.remove('pressed');
    }, 150);
  }
}

// Keyboard event
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (soundMap.hasOwnProperty(key)) {
    event.preventDefault(); // Prevent page scroll on spacebar etc.
    playSound(key);
  }
});

// Click/touch events for all drum pads
document.querySelectorAll('.drum-pad').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.key; // using data-key attribute
    playSound(key);
  });

  // For mobile touch, ensure it works
  button.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent default touch behavior (like scrolling)
    const key = button.dataset.key;
    playSound(key);
  }, { passive: false });
});

// Optional: Add a ripple effect on click (modern touch)
document.querySelectorAll('.drum-pad').forEach(button => {
  button.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    let x = e.clientX - e.target.getBoundingClientRect().left;
    let y = e.clientY - e.target.getBoundingClientRect().top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple style dynamically (or include in CSS)
const style = document.createElement('style');
style.textContent = `
  .drum-pad {
    position: relative;
    overflow: hidden;
  }
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
    width: 100px;
    height: 100px;
    margin-left: -50px;
    margin-top: -50px;
  }
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
