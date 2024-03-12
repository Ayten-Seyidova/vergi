// navbar
(function ($) {

  $.fn.menumaker = function (options) {

    var cssmenu = $(this), settings = $.extend({
      title: "Menu",
      format: "dropdown",
      sticky: false
    }, options);

    return this.each(function () {
      cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
      $(this).find("#menu-button").on('click', function () {
        $(this).toggleClass('menu-opened');
        var mainmenu = $(this).next('ul');
        if (mainmenu.hasClass('open')) {
          mainmenu.hide().removeClass('open');
        }
        else {
          mainmenu.show().addClass('open');
          if (settings.format === "dropdown") {
            mainmenu.find('ul').show();
          }
        }
      });

      cssmenu.find('li ul').parent().addClass('has-sub');

      multiTg = function () {
        cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
        cssmenu.find('.submenu-button').on('click', function () {
          $(this).toggleClass('submenu-opened');
          if ($(this).siblings('ul').hasClass('open')) {
            $(this).siblings('ul').removeClass('open').hide();
          }
          else {
            $(this).siblings('ul').addClass('open').show();
          }
        });
      };

      if (settings.format === 'multitoggle') multiTg();
      else cssmenu.addClass('dropdown');

      if (settings.sticky === true) cssmenu.css('position', 'fixed');

      resizeFix = function () {
        if ($(window).width() > 1024) {
          cssmenu.find('ul').show();
        }

        if ($(window).width() <= 1024) {
          cssmenu.find('ul').hide().removeClass('open');
        }
      };
      resizeFix();
      return $(window).on('resize', resizeFix);

    });
  };
})(jQuery);

(function ($) {
  $(document).ready(function () {

    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

  });
})(jQuery);



// scroll
$(document).ready(function () {
  "use strict";
  var offSetTop = 100;
  var $scrollToTopButton = $('.scrollToTop');
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > offSetTop) {
      $scrollToTopButton.fadeIn();
    } else {
      $scrollToTopButton.fadeOut();
    }
  });

  //Click event to scroll to top
  $scrollToTopButton.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

});
// news
$(document).ready(function () {
  $("#news-slider").owlCarousel({
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});

// news end
$('.brand-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    800: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});



// aos
AOS.init({
  duration: 1200,
})

// aos end

// gallery
// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});



// accordion
// FAQ 
(function ($) {
  var allPanels = $('.faq-content').hide();

  $('.faq-btn').on("touchstart click", function () {
    $this = $(this);
    $target = $this.next();
    $allheadlines = $(".faq-btn");

    if (!$target.hasClass('open')) {
      allPanels.slideUp().removeClass('open');
      $allheadlines.removeClass("selected");
      $target.addClass('open').slideDown();
      $this.addClass("selected");
    } else {
      $this.removeClass("selected");
      $target.slideUp().removeClass("open");
    }

    return false;
  });

})(jQuery);


// FAQQQ
document.addEventListener("DOMContentLoaded", function (event) {
  var acc = document.getElementsByClassName("faq-accordion");
  var panel = document.getElementsByClassName('faq-panel');
  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      var setClasses = !this.classList.contains('active');
      setClass(acc, 'active', 'remove');
      setClass(panel, 'show', 'remove');
      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    }
  }
  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  var acc = document.getElementsByClassName("mobile-faq-menu");
  var panel = document.getElementsByClassName('mobile-faq-panel');
  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      var setClasses = !this.classList.contains('active');
      setClass(acc, 'active', 'remove');
      setClass(panel, 'show', 'remove');
      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    }
  }
  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
});



// loader
