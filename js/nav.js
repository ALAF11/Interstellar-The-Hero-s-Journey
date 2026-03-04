document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.section;

    // Update active button
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update active section
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('section-' + target).classList.add('active');
  });
});


const music  = document.getElementById('bgMusic');
const toggle = document.getElementById('musicToggle');

music.volume = 0.3; 

toggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggle.textContent = '♪';
    toggle.classList.remove('muted');
  } else {
    music.pause();
    toggle.textContent = '♩';
    toggle.classList.add('muted');
  }
});


document.addEventListener('click', () => {
  if (music.paused) music.play();
}, { once: true });
