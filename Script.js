// Carousel for Header

const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);



// change Nav Bar icon colors

// Get the navigation bar icon
const navbarIcon = document.getElementById('navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Check the scroll position
  
if (window.scrollY > 0) {
// If scrolled, add a class to the navigation bar
navbar.classList.add('scrolled');
}
else {
// If at the top, remove the class from the navigation bar
navbar.classList.remove('scrolled');
}
});


// Contact Us form success massage

function showSuccessPopup() {
// Show the success popup
  const successPopup = document.getElementById('successPopup');
  successPopup.style.display = 'block';

  //Clear the form fields
  document.getElementById('contactForm').reset();
  
  // Hide the popup after a delay (e.g., 5 seconds)
  setTimeout(() => {
    successPopup.style.display = 'none';
  }, 5000);
}

// myVideo running in loop

document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('myVideo');

  // Add event listener for video end
  video.addEventListener('ended', function() {
   // Pause for 15 seconds and then play the video again
   setTimeout(function() {
    video.play();
    }, 15000);
   });
});

