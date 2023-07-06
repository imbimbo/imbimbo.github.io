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

