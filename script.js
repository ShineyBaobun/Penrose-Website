document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const sideBar = document.querySelector('.side-bar');
  
    if (menuButton && sideBar) {
      menuButton.addEventListener('click', function() {
        this.classList.toggle('menu-open');
        sideBar.classList.toggle('open');
      });
    }
  
    const form = document.getElementById('InterestForm');
    const submitButton = form?.querySelector('button[type="submit"]');
    let hasSubmitted = false;

    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (hasSubmitted) {
          return; // prevent duplicate submission
        }

        hasSubmitted = true;
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = "Submitting..."; // optional visual feedback
        }
  
        const formData = new FormData(form);
  
        fetch("https://script.google.com/macros/s/AKfycbzJRw109-rMsHpwORf_AtkG-fluqjZHbzwuf8v59R38hJZKiAJ_IcAf-7C9Cacjp0M/exec", {
          method: "POST",
          body: formData
        })
        .then(response => response.text())
        .then(data => {
          alert("Form submitted successfully!");
          form.reset();
          console.log("Server response:", data);
        })
        .catch(error => {
          alert("Error submitting form.");
          console.error("Error:", error);
        });
      });
    }
  });