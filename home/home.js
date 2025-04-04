  const scriptURL = 'https://script.google.com/macros/s/AKfycbyEgOwUYj4ptb4eqB_F0h_FPS7wOGPkan10MGfoRuggci_WBM7z8Bj8KNZ7dbXm8oPcGg/exec';

  const form = document.getElementById('logform');
  const msg = document.getElementById('message');

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          msg.innerHTML = 'Recorded!';
          setTimeout(() => msg.innerHTML = "", 5000);
        })
        .catch(error => console.error('Error!', error.message));
        console.log('JS Loaded properly!');
    });
  } else {
    console.warn("Form not found!");
  }
  

