const scriptURL = 'https://script.google.com/macros/s/AKfycbx5662obKQd7zhf79Gw8sI1G9IU3HcI9c8Y8M2vTUcDGofFXd51Z4OeYNkLJEpzP-Id8Q/exec'

const form = document.forms['form-logMaker']

form.addEventListener('submit', e => {
  
    e.preventDefault()
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Form is submitted" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })

