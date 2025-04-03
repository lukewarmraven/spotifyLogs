const scriptURL = 'https://script.google.com/macros/s/AKfycbwMEGDcv4y5zF1zkYO-eddu9_cUlC2YugSRMGeOX9U0_lV0XTDltZ4VuzFYb6aVg4bD1A/exec'

const form = document.forms['form-logMaker']

form.addEventListener('submit', e => {
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})