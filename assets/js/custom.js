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

  //Header Search
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

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

  //Wow js
  new WOW().init();

  //AOS Anomation
  AOS.init();

  // Button hover

  $(function () {
    $(".cloudflow-btn a , .cloudflow-btn button")
      .on("mouseenter", function (e) {
        let parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
          top: relY,
          left: relX,
        });
      })
      .on("mouseout", function (e) {
        let parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
          top: relY,
          left: relX,
        });
      });
  });

  //mouse active

  $(document).ready(function () {
    $(".why-choose-inner").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".why-choose-inner").on("mouseenter", function () {
      $(this).addClass("active");
      $(this)
        .parent()
        .siblings()
        .find(".why-choose-inner")
        .removeClass("active");
    });
  });

  //Sent Button

  $(function () {
    $(".app").on("click", function () {
      setTimeout(function () {
        $(".message").addClass("sending").text("Sending");
        $(".send_btn").addClass("sending");
      }, 0);

      setTimeout(function () {
        $(".message").addClass("sent").text("Sent");
        $(".send_btn").addClass("sent");
      }, 1200);

      setTimeout(function () {
        $(".message").removeClass("sent").text("Sent");
        $(".send_btn").removeClass("sent");
        $(".message").removeClass("sending").text("Send Message");
        $(".send_btn").removeClass("sending");
      }, 2000);
    });
  });

  /* Product Quantity & Shop Details Quantity*/
  const elements = document.querySelectorAll(
    ".product-quantity-count, .category-count-button, .qty-btn, .ctnbutton"
  );

  elements.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();

      const btn = e.target; // Clicked button
      const box = btn.parentElement.querySelector(
        ".product-quantity-box, .cart-plus-minus-box"
      );

      if (btn.classList.contains("inc")) {
        box.value = Number(box.value) + 1;
      } else if (btn.classList.contains("dec") && Number(box.value) > 1) {
        box.value = Number(box.value) - 1;
      }
    });
  });

  /* Shopping Form Toggle */
  $(document).ready(function () {
    if ($("[data-toggle-shipping]").length) {
      const $shippingToggle = $("[data-toggle-shipping]"),
        $shippingToggleTarget = $($shippingToggle[0].dataset.toggleShipping),
        $shippingShowHide = function () {
          if ($shippingToggle[0].checked) {
            $shippingToggleTarget.slideDown();
          } else {
            $shippingToggleTarget.slideUp();
          }
        };
      $shippingShowHide();
      $shippingToggle.on("change", function () {
        $shippingShowHide();
      });
    }
  });

  /* Payment Method Toggle */
  $(document).ready(function () {
    if ($('input[type="radio"][name="payment-method"]').length) {
      const $paymentToggle = $('input[type="radio"][name="payment-method"]'),
        $paymentShowHide = function () {
          $paymentToggle.each(function () {
            const $this = $(this),
              $thisContent = $this.siblings("p");
            if ($this[0].checked) {
              $thisContent.slideDown();
              $this.parent().siblings().find("p").slideUp();
            }
          });
        };
      $paymentShowHide();
      $paymentToggle.on("change", function () {
        $paymentShowHide();
      });
    }
  });

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

  // Shop To Pop Up
  $(document).ready(function () {
    function handleConfirmation(message, callback) {
      showConfirm(message, function (result) {
        if (result) {
          console.log("You pressed Yes.");
        } else {
          console.log("You pressed No.");
        }
        if (callback) {
          callback(result);
        }
      });
    }

    $(".whiteListConfirm").on("click", function () {
      handleConfirmation(
        "Do you want to add to white list ?",
        function (result) {}
      );
    });

    $(".cartConfirm").on("click", function () {
      handleConfirmation(
        "Do you want to add to Cart list ?",
        function (result) {
          if (result) {
            window.location.href = "cart.html";
          }
        }
      );
    });
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

  /*--------------------------
	   scrollUp
	  ---------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });

  // =======< accordion js >========
  jQuery(document).ready(function ($) {
    "use strict";

    $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
    $(".accordion a").on("click", function (j) {
      let dropDown = $(this).closest("li").find("p");

      $(this).closest(".accordion").find("p").not(dropDown).slideUp();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).closest(".accordion").find("a.active").removeClass("active");
        $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
    });
  });

  jQuery(document).ready(function ($) {
    "use strict";

    $(".accordion2 > li:eq(0) a").addClass("active").next().slideDown();
    $(".accordion2 a").on("click", function (j) {
      let dropDown = $(this).closest("li").find("p");

      $(this).closest(".accordion2").find("p").not(dropDown).slideUp();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).closest(".accordion2").find("a.active").removeClass("active");
        $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
    });
  });

  //Shop Details Thumb Tab

  $(document).ready(function () {
    const tabs = document.querySelectorAll(".tab-btn button");
    const all_content = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        tab.classList.add("active");

        all_content.forEach((content) => {
          content.classList.remove("active");
        });
        all_content[index].classList.add("active");
      });
    });
  });

  // active class & remove class

  $(document).ready(function () {
    let buttons = document.querySelectorAll(
      ".shop-list-left i , .size-value ul li button "
    );

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });

  // scroll up

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

  ////////////////////////////////////////////////////
  // 03. Common Js
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  $("[data-text-color]").each(function () {
    $(this).css("color", $(this).attr("data-text-color"));
  });

  $(".has-img").each(function () {
    let imgSrc = $(this).attr("data-menu-img");
    let img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
    $(this).append(img);
  });

const casestudyswiper = new Swiper(".blog-slider", {
  // Optional parameters
  speed: 1000,
  loop: true,
  slidesPerView: 1,
  slideToShow: 3,
  spaceBetween: 24,
  autoplay: false,
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
      slidesPerView: 2,
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
