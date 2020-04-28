/*!
    * Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);




//Jayni's code //
//Jayni's code //
//Jayni's code //
//Jayni's code //
//Jayni's code //
//Jayni's code //
//Jayni's code //
//tutorial on js mouseover here:
https://www.sitepoint.com/community/t/on-mouseover-display-image-first-post/35684/2
//

//js for image 1 //
var start01= document.getElementById("balloon1"),
        img1 = document.getElementById("img1"),
        img0 = document.getElementById("img0"),
        text0 = document.getElementById("instructions-text00"),
        text1 = document.getElementById("instructions-text1");

          start01.onmouseover = function(){
            img1.style.display = "block";
            img0.style.display = "none";
            text0.style.display = "none";
            text1.style.display = "block";
          }

        start01.onmouseout = function(){
            img1.style.display = "none";
            img0.style.display = "block"
            text0.style.display = "block";
            text1.style.display = "none";
          }



//js for image 2 //
var start02= document.getElementById("balloon2"),
img2 = document.getElementById("img2"),
img0 = document.getElementById("img0"),
text0 = document.getElementById("instructions-text00"),
text2 = document.getElementById("instructions-text2");

start02.onmouseover = function(){
  img2.style.display = "block";
  img0.style.display = "none";
  text0.style.display = "none";
  text2.style.display = "block";
                  }

start02.onmouseout = function(){
img2.style.display = "none";
img0.style.display = "block"
text0.style.display = "block";
text2.style.display = "none";
  }

//js for image 3 //
var start03= document.getElementById("balloon3"),
img3 = document.getElementById("img3"),
img0 = document.getElementById("img0"),
text3 = document.getElementById("instructions-text3");


start03.onmouseover = function(){
img3.style.display = "block";
text0.style.display = "none";
text3.style.display = "block";
}

start03.onmouseout = function(){
img3.style.display = "none";
text0.style.display = "block";
text3.style.display = "none";
}


//js for image 4 //

var start04= document.getElementById("balloon4"),
img4 = document.getElementById("img4"),
img0 = document.getElementById("img0"),
text4 = document.getElementById("instructions-text4");

start04.onmouseover = function(){
img4.style.display = "block";
text0.style.display = "none";
text4.style.display = "block";
}

start04.onmouseout = function(){
img4.style.display = "none";
text0.style.display = "block";
text4.style.display = "none";
}



//js for image 5//
var start05= document.getElementById("balloon5"),
img5 = document.getElementById("img5"),
img0 = document.getElementById("img0"),
text5 = document.getElementById("instructions-text5");


start05.onmouseover = function(){
img5.style.display = "block";
text0.style.display = "none";
text5.style.display = "block";
}

start05.onmouseout = function(){
img5.style.display = "none";
text0.style.display = "block";
text5.style.display = "none";
}


//js for image 6//
var start06= document.getElementById("balloon6"),
img6 = document.getElementById("img6"),
img0 = document.getElementById("img0"),
text6 = document.getElementById("instructions-text6");



start06.onmouseover = function(){
img6.style.display = "block";
text0.style.display = "none";
text6.style.display = "block";
}

start06.onmouseout = function(){
img6.style.display = "none";
text0.style.display = "block";
text6.style.display = "none";
}

//js for image 7//
var start07= document.getElementById("balloon7"),
img7 = document.getElementById("img7"),
img0 = document.getElementById("img0"),
text7 = document.getElementById("instructions-text7");

start07.onmouseover = function(){
img7.style.display = "block";
text0.style.display = "none";
text7.style.display = "block";
}

start07.onmouseout = function(){
img7.style.display = "none";
text0.style.display = "block";
text7.style.display = "none";
}


//js for image 8//
var start08= document.getElementById("balloon8"),
img8 = document.getElementById("img8"),
img0 = document.getElementById("img0"),
text8 = document.getElementById("instructions-text8");


start08.onmouseover = function(){
img8.style.display = "block";
text0.style.display = "none";
text8.style.display = "block";
}

start08.onmouseout = function(){
img8.style.display = "none";
text0.style.display = "block";
text8.style.display = "none";
}


  })(jQuery); // End of use strict
