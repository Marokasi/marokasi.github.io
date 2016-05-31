
$(document).ready(function(){
var $leftUIEl = $('.carousel-arrow-left');
var $rightUTEL = $('.carousel-arrow-right');
var $carouselList = $('.carousel-list');
var elementsCount = $carouselList.find('li').length;
var minimumOffset = - ((elementsCount - 5) * $positionOffset);
var maximumOffset = 0;

    var $positionOffset = 275;
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

