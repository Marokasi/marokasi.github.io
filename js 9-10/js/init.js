// Can also be used with $(document).ready()
$(window).load(function() {
    // Flexslider init
    $('.flexslider').flexslider({
        animation: "slide",
        direction: "vertical"

    });
    // Select init
    $('select').select2();
});