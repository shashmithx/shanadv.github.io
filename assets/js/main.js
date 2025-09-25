import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})

// Animated section switching
document.querySelectorAll('.navbar-link').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.navbar-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const sectionId = btn.getAttribute1('data-section');
    document.querySelectorAll('.section').forEach(sec => {
      sec.classList.remove('active');
      if (sec.id === sectionId) sec.classList.add('active');
    });
  });
});

// Fun icon/hover animations (already handled in CSS)

// Optional: Animate sidebar contacts toggle
document.querySelector('.info_more-btn').addEventListener('click', function() {
  document.querySelector('.sidebar-info_more').classList.toggle('show');
});

// Animate initial active section
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.section.active').style.opacity = 1;
});
