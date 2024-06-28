document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-links'); 

  menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active'); 
  });
});