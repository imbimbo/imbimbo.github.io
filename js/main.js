$(window).resize(function() {
  if ($(this).width() > 768) {
    $(".nav-ul").show();
  }
});

$(document).ready(function() {


  $(".icon").on("click", function() {

    if ($(".nav-ul").css("display") == "none") {
      $(".nav-ul").css("display", "flex");
    } else {
      $(".nav-ul").css("display", "none");
    }
  });


});