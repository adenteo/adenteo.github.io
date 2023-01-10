function toggleMenu() {
    var element = document.getElementById("navbar-navigation");
    element.classList.toggle("collapse");
}

$(document).ready(function () {
    // Activate Carousel
    $(".carousel").carousel({ interval: false });

    $(".left").click(function () {
        $(".carousel").carousel("prev");
    });
    $(".right").click(function () {
        $(".carousel").carousel("next");
    });
});
