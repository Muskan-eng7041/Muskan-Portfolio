AOS.init({
    duration: 800,   // animation duration
    once: true       // animation only once on scroll
  });
  document.addEventListener("DOMContentLoaded", function() {
  const fadeElements = document.querySelectorAll(".fade-up");

  function checkFadeElements() {
    const screenHeight = window.innerHeight;
    fadeElements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if(position < screenHeight - 100){ 
        el.classList.add('show'); // only add, never remove
      }else{
        el.classList.remove('show');
      }
    });
  }

  window.addEventListener("scroll", checkFadeElements);
  checkFadeElements(); // initial check on load
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwyP-EEYBstF_FRG-Iggsy2M9IRpcnAXY6KYT0sh52E_f4YNrBGSRcoVOWrlPuCdqU6-g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector("#msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!! 😀";
        setTimeout(function(){
          msg.innerHTML= "";
        },5000)
        form.reset()
      })      
      .catch(error => console.error('Error!', error.message))
  })


