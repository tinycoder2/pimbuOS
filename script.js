/*
$(".navbar").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".navbar").slideDown(100);
    } else {
      $(".navbar").slideUp(100);
    }
  });
  $(".go-down a").click(function (e) {
    e.preventDefault();
    var top = $($(this).attr("href")).position().top - 70;
    $("html, body").animate(
      {
        scrollTop: top
      },
      1000
    );
  });
  document.querySelector('#popup').style.display = 'none';
*/

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function closePopUp(id) {
  document.getElementById(id).style.display = 'none';
  
}

