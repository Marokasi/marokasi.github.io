$(function(){
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


