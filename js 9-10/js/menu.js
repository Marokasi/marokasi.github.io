//$(function(){
//    var $menu = $('.menu a');
//    $menu.on('click', function(e) {
//        e.preventDefault();
//        var $submenu = $(this).siblings('.submenu');
//        $submenu.toggle('slow');
//    });
//
//});
//
//$(function(){
//    var $submenuA = $('.submenu a');
//    $submenuA.on('click', function(){
//        var $submenu_level3 = $(this).siblings('.submenu_level3');
//        $submenu_level3.toggle('slow');
//    })
//});
//
//$(function(){
//    var $submenu3A = $('.submenu_level3 a');
//    $submenu3A.on('click', function(){
//        var $submenu_level4 = $(this).siblings('.submenu_level4');
//        $submenu_level4.toggle('slow');
//    })
//});


$(function(){
    var $menu = $('.menu a');
    $menu.mouseenter(function(e) {
        e.preventDefault();
        var $submenu = $(this).siblings('.submenu');
        $submenu.show('slow');
    });
    $menu.mouseleave(function(e) {
        e.preventDefault();
        var $submenu = $(this).siblings('.submenu');
        $submenu.hide('slow');
    });

});

$(function(){
    var $submenuA = $('.submenu a');
    $submenuA.hover(function(e){
        e.preventDefault();
        var $submenu_level3 = $(this).siblings('.submenu_level3');
        $submenu_level3.show('slow');
    });
    $submenuA.mouseleave(function(){
        var $submenu_level3 = $(this).siblings('.submenu_level3');
        $submenu_level3.hide('slow');
    })
});