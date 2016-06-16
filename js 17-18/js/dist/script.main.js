
$(document).ready(function(){
    var $leftUIEl = $('.carousel-arrow-left');
    var $rightUTEL = $('.carousel-arrow-right');
    var $carouselList = $('.carousel-list');
    var elementsCount = $carouselList.find('li').length;
    console.log(elementsCount);
    var $positionOffset = 275;
    var minimumOffset = -((elementsCount - 2) * $positionOffset);
    console.log(minimumOffset);
    var maximumOffset = 0;


    var $currentLeftValue = 0;
    $leftUIEl.click(function(){
        if($currentLeftValue != maximumOffset){
            $currentLeftValue += 275;
            $carouselList.animate({ left: $currentLeftValue + 'px'}, 500)
        }

    });
    $rightUTEL.click(function(){

        if($currentLeftValue != minimumOffset){
            $currentLeftValue -= 275;
            $carouselList.animate({ left: $currentLeftValue + 'px'}, 500)
        }

    });
});




;$(function(){
    var template = $('#test').html();

   var data = {
       name: 'Иванов Иван Иванович',
       photo: 'img/ho.png',
       occupation: 'Студент заборостроительного университета',
       reason: 'Хочу учить фронтенд, потому что:',
       reason_list : ['Заборы строить не интересно', 'Платят мало', 'Приходится работать по ночам'],
       tel: 'Мой контактный телефон ',
       number: +38022222222,
       vk: 'Мой профиль в контакте ',
       vk_link:'http://vk.com',
       vk_link_title: 'vk.com',
       feedback: 'Мой фидбэк:',
       feedback_text: 'Если нужно, могу построить вам забор'
   };
    var result = tmpl(template, data);
    $('body').append(result)

});


;
// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
    var cache = {};

    this.tmpl = function tmpl(str, data){
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ?
            cache[str] = cache[str] ||
                tmpl(document.getElementById(str).innerHTML) :

            // Generate a reusable function that will serve as a template
            // generator (and which will be cached).
            new Function("obj",
                "var p=[],print=function(){p.push.apply(p,arguments);};" +

                    // Introduce the data as local variables using with(){}
                "with(obj){p.push('" +

                    // Convert the template into pure JavaScript
                str
                    .replace(/[\r\t\n]/g, " ")
                    .split("<%").join("\t")
                    .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                    .replace(/\t=(.*?)%>/g, "',$1,'")
                    .split("\t").join("');")
                    .split("%>").join("p.push('")
                    .split("\r").join("\\'")
                + "');}return p.join('');");

        // Provide some basic currying to the user
        return data ? fn( data ) : fn;
    };
})();



