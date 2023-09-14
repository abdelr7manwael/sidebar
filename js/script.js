// Get the hamburger, overlay, and isClosed variables
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
let isClosed = false;

// Add a click event listener to the hamburger button
hamburger.addEventListener('click', hamburgerCross);

// Define the hamburgerCross function
function hamburgerCross() {
  // If the overlay is currently closed, open it
  if (isClosed) {
    overlay.style.display = 'none';
    hamburger.classList.remove('is-open');
    hamburger.classList.add('is-closed');
    isClosed = false;
  } else {
    // Otherwise, close the overlay
    overlay.style.display = 'block';
    hamburger.classList.remove('is-closed');
    hamburger.classList.add('is-open');
    isClosed = true;
  }
}

// Add a click event listener to the offcanvas toggle button
document.querySelector('[data-toggle="offcanvas"]').addEventListener('click', function() {
  // Toggle the toggled class on the wrapper element
  document.querySelector('#wrapper').classList.toggle('toggled');
});