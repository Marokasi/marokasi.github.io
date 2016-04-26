var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

var title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = 'Test In Programming';
wrapper.appendChild(title);

var box = document.createElement('div');
box.classList.add('box');
wrapper.appendChild(box);

var h2 = document.createElement('h2');
h2.innerHTML = '1. Question number 1';
box.appendChild(h2);

var form = document.createElement('form');
box.appendChild(form);

var item = document.createElement('div');
item.classList.add('item');
form.appendChild(item);

var label = document.createElement('label');
label.innerHTML = ' Answer variant number 1';
item.insertBefore(label, form.children[1]);

var input = document.createElement('input');
input.type = 'checkbox';
input.name = 'info';
input.value = 'answer 1';
item.appendChild(input);

item1 = item.cloneNode(true);
item1.querySelector('label').innerHTML = ' Answer variant number 2';
form.appendChild(item1);
item2 = item.cloneNode(true);
item2.querySelector('label').innerHTML = ' Answer variant number 3';
form.appendChild(item2);

box1 = box.cloneNode(true);
box1.querySelector('h2').innerHTML = '2. Question number 2';
wrapper.appendChild(box1);

box2 = box.cloneNode(true);
box2.querySelector('h2').innerHTML = '3. Question number 3';
wrapper.appendChild(box2);

var button = document.createElement('button');
button.classList.add ('btn');
button.type = 'submit';
button.innerHTML = 'Check the answers';
wrapper.appendChild(button);



/*
как создать разные аттрибуты для одного и того - же инпута
их обьеденить с лейблом
*/