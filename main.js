// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorElement = document.querySelector('#modal')
const likes = document.querySelectorAll('.like-glyph')
const errorMessage = document.querySelector('#modal-message')

errorElement.classList.add('hidden');

document.addEventListener('DOMContentLoaded', function(){
  likes.forEach((like) => {
    like.addEventListener('click', (event) => {
      mimicServerCall()
      .then(function() {
        if (event.target.innerHTML == EMPTY_HEART) {
          event.target.innerHTML = FULL_HEART;
          event.target.classList.add('activated-heart')
        }
        else {
          event.target.innerHTML = EMPTY_HEART;
          event.target.classList.remove('activated-heart')
        }
      })
      .catch((error) => {
        setTimeout(function() {
          errorMessage.innerHTML = `${error.message}`;
          errorElement.classList.remove('hidden')
        }, 2000)
        errorElement.classList.add('hidden')
      })
    })
  })
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
