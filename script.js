function toggleMenu() {
    var element = document.getElementById("navbar-navigation");
    element.classList.toggle("collapse");
}

$(document).ready(function () {
    // Activate Carousel
    $(".carousel").carousel({ interval: 2000 });

    // Enable Carousel Indicators
    // $(".item1").click(function () {
    //     $("#carousel-slide").carousel(0);
    // });
    // $(".item2").click(function () {
    //     $("#carousel-slide").carousel(1);
    // });
    // $(".item3").click(function () {
    //     $("#carousel-slide").carousel(2);
    // });
    // $(".item4").click(function () {
    //     $("#carousel-slide").carousel(3);
    // });

    // Enable Carousel Controls
    $(".left").click(function () {
        $(".carousel").carousel("prev");
    });
    $(".right").click(function () {
        $(".carousel").carousel("next");
    });
});
