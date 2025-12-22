//Struktura e burger menu//
  const burger = document.getElementById('af-burger');
  const nav = document.getElementById('af-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });

