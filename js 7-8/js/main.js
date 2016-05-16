$(function() {
    $('.tabs .tab-links a').on('click', function(event)  {
        var myValue = $(this).attr('href');
        $('.tabs ' + myValue).show().siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        event.preventDefault();
    });
});