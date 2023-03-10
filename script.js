function toggleMenu() {
  var element = document.getElementById("navbar-navigation");
  element.classList.toggle("collapse");
  var menu = document.getElementById("navbar-navigation-menu");
  var icon = document.getElementById("navbar-navigation-menu-cross");
  icon.style.display = "block";
  menu.style.display = "none";
}

function closeMenu() {
  var element = document.getElementById("navbar-navigation");
  element.classList.toggle("collapse");
  var menu = document.getElementById("navbar-navigation-menu");
  var icon = document.getElementById("navbar-navigation-menu-cross");
  icon.style.display = "none";
  menu.style.display = "block";
}

$(document).ready(function () {
  AOS.init();
  // Activate Carousel
  $(".carousel").carousel({ interval: false });

  $(".left").click(function () {
    $(".carousel").carousel("prev");
  });
  $(".right").click(function () {
    $(".carousel").carousel("next");
  });
});

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -600;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 600;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      markers: false,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
});
