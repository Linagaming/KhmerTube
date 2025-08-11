const slider = document.getElementById("listcategory");

let isDown = false;
let startX;
let scrollLeft;
let velocity = 0;
let lastX;
let lastTime;
let momentumID;

slider.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  lastX = e.pageX;
  lastTime = Date.now();
  if(momentumID) cancelAnimationFrame(momentumID);
  slider.classList.add('active');
});

slider.addEventListener('mouseup', () => {
  if (isDown) applyMomentum();
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
  if (isDown) applyMomentum();
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const now = Date.now();

  const dx = e.pageX - lastX;
  const dt = now - lastTime;

  velocity = dx / dt;

  slider.scrollLeft = scrollLeft - (x - startX);

  lastX = e.pageX;
  lastTime = now;
});

slider.addEventListener('touchstart', e => {
  isDown = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  lastX = e.touches[0].pageX;
  lastTime = Date.now();
  if(momentumID) cancelAnimationFrame(momentumID);
});

slider.addEventListener('touchend', () => {
  if (isDown) applyMomentum();
  isDown = false;
});

slider.addEventListener('touchmove', e => {
  if (!isDown) return;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const now = Date.now();

  const dx = e.touches[0].pageX - lastX;
  const dt = now - lastTime;

  velocity = dx / dt;

  slider.scrollLeft = scrollLeft - (x - startX);

  lastX = e.touches[0].pageX;
  lastTime = now;
});

function applyMomentum() {
  let momentumVelocity = velocity * 50; // កំណត់សមត្ថភាព scroll momentum

  function momentum() {
    if (Math.abs(momentumVelocity) > 0.1) {
      slider.scrollLeft -= momentumVelocity;

      // Clamp scroll position មិនឲ្យ scroll ក្រៅ limit
      if (slider.scrollLeft < 0) {
        slider.scrollLeft = 0;
        momentumVelocity = 0;
      } else if (slider.scrollLeft > slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
        momentumVelocity = 0;
      }

      momentumVelocity *= 0.95; // friction
      momentumID = requestAnimationFrame(momentum);
    } else {
      cancelAnimationFrame(momentumID);
      momentumID = null;
    }
  }
  momentum();
}
