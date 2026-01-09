//Burger menu
  const burger = document.getElementById('af-burger');
  const nav = document.getElementById('af-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });


// JS for alert

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formAlert').classList.remove('d-none');
});


// ==================== 3D HOVER EFFECT ====================
