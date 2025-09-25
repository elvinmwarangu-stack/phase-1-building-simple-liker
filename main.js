// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
// Constant definitions
const emptyHeart = '♡';
const fullHeart = '♥';

// Hide the modal on page load
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Select all hearts
const hearts = document.querySelectorAll('.like-glyph');

// Add click event listeners
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    // Only act on empty hearts
    if (heart.textContent === EMPTY_HEART) {
      mimicServerCall()
        .then(() => {
          // On success: fill the heart and activate it
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        })
        .catch((error) => {
          // On failure: show error modal and hide after 3s
          errorModal.classList.remove('hidden');
          const modalMessage = document.getElementById('modal-message');
          modalMessage.textContent = error;
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    } else {
      // If heart is already full, revert it
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  });
});
