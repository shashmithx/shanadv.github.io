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
