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


  // Sliding cards functionality for activities page 
document.addEventListener('DOMContentLoaded', function() {
    const activitiesCardsContainer = document.querySelector('.activities .card-container');
    let activitiesCards = document.querySelectorAll('.activities .card');
    const slideBarContainer = document.createElement('div');
    slideBarContainer.className = 'slide-bar-container';
    document.body.appendChild(slideBarContainer);

    function generateSlideBarIndicators() {
        activitiesCards.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.className = 'slide-bar-indicator';
            indicator.dataset.index = index;
            slideBarContainer.appendChild(indicator);

            indicator.addEventListener('click', () => {
                moveToCard(index);
            });
        });
        updateActiveIndicator(0); 
    }

        // Function to move to a specific card
        function moveToCard(index) {
            const selectedCard = activitiesCards[index];
            activitiesCardsContainer.insertBefore(selectedCard, activitiesCardsContainer.firstChild);
            activitiesCards = document.querySelectorAll('.activities .card'); 
            updateActiveIndicator(index);
        }
    
        function updateActiveIndicator(currentIndex) {
            const indicators = document.querySelectorAll('.slide-bar-indicator');
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

    function slideActivitiesCards() {
        if (activitiesCards.length > 0) {
            const lastActivityCard = activitiesCards[activitiesCards.length - 1];
            activitiesCardsContainer.insertBefore(lastActivityCard, activitiesCardsContainer.firstChild);
            activitiesCards = document.querySelectorAll('.activities .card');
            activitiesCardsContainer.classList.add('slide-activities');
            setTimeout(() => {
                activitiesCardsContainer.classList.remove('slide-activities');
            }, 500);
            const newActiveIndex = Array.from(activitiesCards).indexOf(lastActivityCard);
            updateActiveIndicator(newActiveIndex);
        }
    }

    if (activitiesCardsContainer && activitiesCards.length > 0) {
        generateSlideBarIndicators();
        setInterval(slideActivitiesCards, 5000);
    }
});