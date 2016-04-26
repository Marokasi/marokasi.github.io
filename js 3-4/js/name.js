/**
 * Created by User on 23.04.2016.
 */
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

var title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = 'Test In Programming';
wrapper.appendChild(title);



var form = document.createElement('form'),
    label = document.createElement('label'),
    input = document.createElement('input'),
    button = document.createElement('button'),
    h2 = document.createElement('h2'),
    item = document.createElement('div');


input.type = 'checkbox';
input.name = 'info';
input.value = 'answer 1';


var box = document.createElement('div');
box.classList.add('box');
box.appendChild(form);


for( var i = 0; i < 3; i++ ) {
    wrapper.appendChild(box.cloneNode(true)).appendChild(h2.cloneNode(true)).innerHTML = ( i + 1) + '. Question number ' + (i + 1);
}
//box.appendChild(form);
////form.appendChild(label);
for( var i = 0; i < 3; i++ ){
    form.appendChild(label.cloneNode(true)).appendChild(document.createTextNode('Answer variant number' + (i + 1)));
}



/*
почему я не могу достучаться к форме и вставить туда лейбл
 */