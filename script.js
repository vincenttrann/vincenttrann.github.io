
$(document).ready(function(){
  //Fun facts
  const funFacts = [
    "I'm' 6'3 without shoes.",
    "I love playing basketball and volleyball!",
    "I love video games.",
    "I mostly listen to KPOP and EDM.",
    "It is my goal to travel the world.",
    "I love learning about new technologies.",
    "Product design is my career passion.",
    "I follow the NBA religiously.",
    "I've been a Los Angeles Laker fan since I was born.",
    "I currently play VALORANT and my peak rank was Diamond.",
    "I'm affiliated with the professional business frat: Alpha Kappa Psi.",
    "My favorite dessert is jasmine milk tea with boba.",
    "I once gained 25 pounds of muscle over a summer."
  ];
  //Random fact generator
  var randomFactIndex = Math.floor(Math.random() * funFacts.length);
  $('#preloader-title').text("Vincent's Random Fun Fact");
  $('#preloader-content').html(funFacts[randomFactIndex]);
  //Load preloaders
  $( window ).on( "load", function() {
    var preloader = $('.spinner-wrapper');
    preloader.animate({
      up:'40px',
      opacity:0
    }, 500);
    preloader.css("visibility","hidden");
    AOS.init();
  });

  //Scroll to reveal
  $(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 20);

    $(".highlight").each(function(){
            if ( $(this).isOnScreenHighlight() ) {
            $(this).addClass('shown');
                } else {
                  $(this).removeClass('shown');
            }
    });
  });

  //Detail button
  
  $(".p-center-wrapper button[data-toggle='collapse']").click (function () {
    $(this).text(function(i,old){
      var newString = "";
      if (old.startsWith("See")) {
        newString = old.replace("See","Hide");
      } else if (old.startsWith("Hide")){
        newString = old.replace ("Hide","See");
      } else {
        newString = old;
      }
      return newString;
    });
  })
  
  
  //Monitor side nav
  
  $('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 160
  });
  
  $('#template-to-top').hide();
  $(".bs-docs-sidebar").hide();

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  


  var allLargeImgs = document.getElementsByClassName('full-screen-img');

  //Check to see if the window is top/display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#template-to-top').fadeIn();
    } else {
      $('#template-to-top').fadeOut();
    }
    if ($(this).scrollTop() > 600) {
      var hasLargeImg = false;
      Array.prototype.forEach.call(allLargeImgs, function(el) {
          if (checkVisible(el)) {
            hasLargeImg = true;
          }
      });
      if (hasLargeImg) {
        $(".bs-docs-sidebar").fadeOut('slow');
      } else {
        $(".bs-docs-sidebar").fadeIn('slow');
      }
    }
    else {
        $(".bs-docs-sidebar").fadeOut("slow");
    }
  });

  $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });

  //Click event to scroll to top
    $('#template-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });    

});

//Highlight on screen
$.fn.isOnScreenHighlight = function(){
  var win = $(window);

  var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.bottom || viewport.top > bounds.bottom));
      
};
