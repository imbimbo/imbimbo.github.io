/*-- WINDOW RESIZE --*/

$(window).resize(function() {
  if ($(this).width() > 768) {
    $(".nav-ul").show();
  }
});

/*-- DISPLAY MENU ICON --*/

$(document).ready(function() {


  $(".icon").on("click", function() {

    if ($(".nav-ul").css("display") == "none") {
      $(".nav-ul").css("display", "flex");
    } else {
      $(".nav-ul").css("display", "none");
    }
  });


});

/*-- SMOOTH SCROLL --*/

$(document).ready(function() {

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // The number (600) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function() {

        window.location.hash = hash;
      });

    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const elementsToObserve = document.querySelectorAll('.fade');
  elementsToObserve.forEach(element => {
    observer.observe(element);
  });
});
