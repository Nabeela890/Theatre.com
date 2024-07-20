(function ($) {
    $(function () {
  
      // Use mouseenter and mouseleave for better hover effect on desktop
      $('.navbar ul li').mouseenter(function () {
        $(this).find('.nav-dropdown').show();
      }).mouseleave(function () {
        $(this).find('.nav-dropdown').hide();
      });
  
      // Handle click/tap for mobile devices
      $('.navbar ul li').on('click', function () {
        if ($(window).width() <= 767) {
          $(this).find('.nav-dropdown').toggle();
        }
      });
  
      // Hide dropdown on outside click
      $('html').click(function () {
        $('.nav-dropdown').hide();
      });
  
      // Toggle mobile navigation
      $('#nav-toggle').click(function () {
        $('.navbar ul').slideToggle();
        $('#nav-toggle').toggleClass('active');
      });
  
    });
  })(jQuery);


const sliders = document.querySelector('.testimonial-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cards = document.querySelectorAll('.testimonial-card');

let slideIndex = 0;

function showSlides() {
    cards.forEach(card => (card.style.display = 'none'));

    for (let i = slideIndex; i < slideIndex + 3; i++) {
        if (cards[i]) {
            cards[i].style.display = 'block';
        }
    }
}

prevButton.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex -= 3;
    } else {
        slideIndex = cards.length - 3;
    }
    showSlides();
});

nextButton.addEventListener('click', () => {
    if (slideIndex < cards.length - 3) {
        slideIndex += 3;
    } else {
        slideIndex = 0;
    }
    showSlides();
});

showSlides();

















const slider = document.querySelector('.slider');

let newIndex = 0;

function changeSlide() {
    newIndex++;
    if (newIndex >= slider.children.length) {
        newIndex = 0;
    }

    const translateX = -newIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

function startAutomaticSlide() {
    setInterval(changeSlide, 2000); // Change the interval time (2000 milliseconds = 2 seconds)
}

// Start automatic sliding when the page loads
startAutomaticSlide();


