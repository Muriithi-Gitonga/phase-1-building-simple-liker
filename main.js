// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


modal = document.querySelector("#modal")
modal.className = "hidden";


heart = document.querySelectorAll('.like-glyph') 

heart.forEach(glyph => {
  glyph.addEventListener("click", () => {
    mimicServerCall()
    .then(() => {
      if (heart.innerText !== FULL_HEART){
        heart.className = "activated-heart"
        heart.innerText = FULL_HEART
      } else {
        heart.className = ""
        heart.innerText = EMPTY_HEART
      }
    })
    .catch(err => {
      modal.className = ""
      modal.innerText = err
      setTimeout(() => {modal.className='hidden'},3000)
    })
  })
});






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
