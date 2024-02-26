(function () {
  ("use strict");

  // Odometer CounterUp
  $(document).ready(function () {
    $(".odometer-wrapper").appear(function () {
      let count = $(this).attr("data-count");
      let odometer = $(this).closest(".odometer-wrapper").find(".odometer");

      setTimeout(function () {
        odometer.html(count);
      }, 500);
    });
  });

  /*------------- preloader js --------------*/
  let percentage = 0;
  let LoadingCounter = setInterval(function () {
    if (percentage <= 100) {
      $("#loading-screen ").css("opacity", 100 - percentage);
      $("#loading-screen .loading-counter").text(percentage + "%");
      $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
      $("#loading-screen .progress-line").css(
        "transform",
        "scale(" + percentage / 100 + ")"
      );
      percentage++;
    } else {
      $("#loading-screen").fadeOut(300);
      setTimeout(() => {
        $("#loading-screen").remove();
      }, 300);
      clearInterval(LoadingCounter);
    }
  }, 10);


  // sticky
  // let wind = $(window);
  // let sticky = $("#header-sticky");
  // wind.on("scroll", function () {
  //   let scroll = wind.scrollTop();
  //   if (scroll < 100) {
  //     sticky.removeClass("sticky");
  //   } else {
  //     sticky.addClass("sticky");
  //   }
  // });

  // menu button - start
  $(document).ready(function () {
    $(".close_btn, .cart_sidebar_overlay").on("click", function () {
      $(".cart_sidebar").removeClass("active");
      $(".cart_sidebar_overlay").removeClass("active");
    });

    $(".cart_btn").on("click", function () {
      $(".cart_sidebar").addClass("active");
      $(".cart_sidebar_overlay").addClass("active");
    });

    $(".cart_item .remove_btn").on("click", function () {
      $(this).closest(".cart_item").toggleClass("remove");
    });
  });

  // menu button - start
  $(document).ready(function () {
    $(".close_btn, .white_sidebar_overlay").on("click", function () {
      $(".white_sidebar").removeClass("active");
      $(".white_sidebar_overlay").removeClass("active");
    });

    $(".white_btn").on("click", function () {
      $(".white_sidebar").addClass("active");
      $(".white_sidebar_overlay").addClass("active");
    });

    $(".white_item .remove_btn").on("click", function () {
      $(this).closest(".white_item").toggleClass("remove");
    });
  });


  //AOS Anomation
  AOS.init();

  // Mouse Move

  $(document).ready(function () {
    document.addEventListener("mousemove", parallax);

    function parallax(e) {
      this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 75;
        const y = (window.innerHeight - e.pageY * speed) / 75;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
  });




  //Go TO Top

  $(document).ready(function () {
    $(".scroll-top-inner").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });

    function handleScrollbar() {
      const bHeight = $("body").height();
      const scrolled = $(window).innerHeight() + $(window).scrollTop();

      let percentage = (scrolled / bHeight) * 100;

      if (percentage > 100) percentage = 100;

      $(".scroll-top-inner .bar-inner").css("width", percentage + "%");
    }

    $(window).on("scroll", function () {
      handleScrollbar();
    });
  });



  ////////////////////////////////////////////////////
  // 09. Sidebar Js
  $(".menu-bar").on("click", function () {
    $(".offcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".offcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".offcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ///////////////////////////////////////////////////
  // 02. SubMenu Dropdown Toggle
  let header_icon = `<span class="header-icon">
		<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="ht://www.w3.org/2000/svg">
		<path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6.04088 0Z" fill="#FFB302"/></svg>                                
	</span>`;
  $(header_icon).insertBefore(".menu-icon nav ul .menu-icon-2");

  ////////////////////////////////////////////////////
  // 21.menu button - start
  $(document).ready(function () {
    $(".close_btn, .cart_sidebar_overlay").on("click", function () {
      $(".cart_sidebar").removeClass("active");
      $(".cart_sidebar_overlay").removeClass("active");
    });

    $(".cart_btn").on("click", function () {
      $(".cart_sidebar").addClass("active");
      $(".cart_sidebar_overlay").addClass("active");
    });

    $(".cart_item .remove_btn").on("click", function () {
      $(this).closest(".cart_item").toggleClass("remove");
    });
  });

  ////////////////////////////////////////////////////
  // 21.menu content - start
  if ($(".main-menu-content").length && $(".main-menu-mobile").length) {
    let navContent = document.querySelector(".main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;

    let arrow = $(".main-menu-mobile .has-dropdown > a");

    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.add("dropdown-toggle-btn");
      arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

      self.append(function () {
        return arrowBtn;
      });

      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("dropdown-opened");
        self.parent().toggleClass("expanded");
        self
          .parent()
          .parent()
          .addClass("dropdown-opened")
          .siblings()
          .removeClass("dropdown-opened");
        self.parent().parent().children(".submenu").slideToggle();
      });
    });
  }

  ////////////////////////////////////////////////////
  let windowOn = $(window);

  ////////////////////////////////////////////////////
  // 13. Smooth Scroll Js
  function smoothSctoll() {
    $(".smooth a").on("click", function (event) {
      let target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 80,
            },
            1000
          );
      }
    });
  }
  smoothSctoll();

  ////////////////////////////////////////////////////
  // 13. Smooth Scroll Js
  function back_to_top() {
    let btn = $("#back_to_top");
    let btn_wrapper = $(".back-to-top-wrapper");

    windowOn.scroll(function () {
      if (windowOn.scrollTop() > 300) {
        btn_wrapper.addClass("back-to-top-btn-show");
      } else {
        btn_wrapper.removeClass("back-to-top-btn-show");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
  }
  back_to_top();

 
const casestudyswiper = new Swiper(".blog-slider", {
  // Optional parameters
  speed: 1000,
  loop: true,
  slidesPerView: 1,
  slideToShow: 3,
  spaceBetween: 24,
  autoplay: true,
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },

    a11y: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slider-prev",
    prevEl: ".slider-next",
  },
}); 


})(jQuery);
