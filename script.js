document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-links'); 

  menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active'); 
  });

   // Sliding cards functionality for rooms page
   const cardsContainer = document.querySelector('.cards-container');
   let cards = document.querySelectorAll('.card');

   function slideCards() {
       const firstCard = cards[0];
       cardsContainer.appendChild(firstCard);
       cards = document.querySelectorAll('.card');
       cardsContainer.classList.add('slide');
       setTimeout(() => {
           cardsContainer.classList.remove('slide');
       }, 3000);
   }

   setInterval(slideCards, 3000);
  });

  
     // Sliding cards functionality for offers page 
    const cardsContainer = document.querySelector('.offer-container');
    let cards = document.querySelectorAll('.offer');
 
    function slideCards() {
        const firstCard = cards[0];
        cardsContainer.appendChild(firstCard);
        cards = document.querySelectorAll('.offer');
        cardsContainer.classList.add('slide');
        setTimeout(() => {
            cardsContainer.classList.remove('slide');
        }, 3000);
    }
    setInterval(slideCards, 3000);


        // Video overlay functionality
        const video = document.getElementById('video');
        const overlay = document.getElementById('overlay');
        const playButton = document.getElementById('play-button');
    
        video.addEventListener('play', function () {
            overlay.style.display = 'none';
            playButton.style.display = 'none';
        });