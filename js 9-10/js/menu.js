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


//$(function(){
//    var $menu = $('.menu a');
//    $menu.hover(function(e) {
//        e.preventDefault();
//        var $submenu = $(this).siblings('.submenu');
//        $submenu.stop().fadeToggle(400);
//    });
//    $menu.mouseleave(function(e) {
//        e.preventDefault();
//        var $submenu = $(this).siblings('.submenu');
//        $submenu.stop().hide('slow');
//    });
//
//});

//$(function(){
//    var $submenuA = $('.submenu a');
//    $submenuA.hover(function(e){
//        e.preventDefault();
//        var $submenu_level3 = $(this).siblings('.submenu_level3');
//        $submenu_level3.show('slow');
//    });
//    $submenuA.mouseleave(function(){
//        var $submenu_level3 = $(this).siblings('.submenu_level3');
//        $submenu_level3.hide('slow');
//    })
//});

$(function(){
var $menu = $('.menu li');
    $menu.hover(function(){
        $(this).find('.submenu ').stop().slideToggle(350);

    })
});

$(function(){
    var $submenu = $('.submenu li');
    $submenu.hover(function(){
        $(this).find('.submenu_level3').stop().slideToggle(350);
    })
});

$(function(){
    var $submenu_level3 = $('.submenu_level3 li');
    $submenu_level3.hover(function(){
        $(this).find('.submenu_level4').stop().slideToggle(350);
    })
});

$(function(){
    var $elem = $('.submenu li');
    $elem.mouseover(function(){
        $(this).stop().animate({
            backgroundColor: '##B03232',
            color: '#000'
        }, 300)

    });
    $elem.mouseleave(function(){
        $(this).stop().animate({
            backgroundColor: '#EB3F3F',
            color: '#fff'
        }, 300)
    })
});