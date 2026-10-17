document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const sideBar = document.querySelector('.side-bar');
  
    if (menuButton && sideBar) {
      menuButton.addEventListener('click', function() {
        this.classList.toggle('menu-open');
        sideBar.classList.toggle('open');
      });
    }
  
  });



  let slideIndex = 1;

    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      if (slides.length === 0) return;

      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    }