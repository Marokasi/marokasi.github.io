
$(document).ready(function() {
// Tooltip only Text
    $('#firstname').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('.box.firstname')
            .css({
                top: -15,
                left: 300
            })
            .fadeIn('slow');

    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    })
});


$(document).ready(function() {
// Tooltip only Text
    $('#lastname').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('.box.lastname')
            .css({
                top: -15,
                left: 300
            })
            .fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    })
});

$(document).ready(function() {
// Tooltip only Text
    $('#address').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('.box.address')
            .css({
                top: -15,
                left: 300
            })
            .fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    })
});
