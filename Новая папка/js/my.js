//
//function createQuestion() {
//    var box = document.createElement('div');
//    box.classList.add('box');
//    /*create form*/
//    var form = document.createElement('form');
//    var label = document.createElement('label');
//    label.setAttribute('for', 'variant');
//    var item = document.createElement('div');
//    item.classList.add('item');
//    for(var k = 0; k < 3; k++) {
//        form.appendChild(item.cloneNode(true));
//        for(var i = 0; i < 1; i++) {
//            item.appendChild(createInput());
//            item.appendChild(label.cloneNode(true)).innerHTML = 'Question variant Number ' + (j + 1);
//            //item.appendChild(label.cloneNode(true)).innerHTML = 'Question variant Number ';
//        }
//    }
//    box.appendChild(form);
//    return box;
//
//}
//var result  = createQuestion();
//console.log(result);
//
///* Creation of the title of the test */
//function titleCreation() {
//    var title = document.createElement('h1');
//    title.classList.add('title');
//    title.innerHTML = 'Test In Programming';
//    return title;
//}
///* Creation of the Input of the test */
//function createInput() {
//    var input = document.createElement('input');
//    input.setAttribute('type', 'checkbox');
//    input.setAttribute('name', 'variant');
//    input.setAttribute('value', 'answer');
//    return input;
//}
///* Creation of the button */
//function createButton() {
//    var button = document.createElement('input');
//    button.classList.add('btn');
//    button.setAttribute('type', 'button');
//    button.setAttribute('value', 'check the result');
//    return button;
//}
//
///* Creation of the set's title */
//function createH2() {
//    var titleSection = document.createElement('h2');
//    titleSection.innerHTML = (j + 1) +'. Question number '+ (j + 1);
//    //titleSection.innerHTML = '! Question number !';
//    return titleSection;
//}
//
//function wrapperCreation(){
//    var wrapper = document.createElement('div');
//    wrapper.classList.add('wrapper');
//    wrapper.appendChild(titleCreation());
//    for(var j = 0; j < 3; j++) {
//        wrapper.appendChild(createH2());
//    }
//    wrapper.appendChild(createQuestion());
//    wrapper.appendChild(createButton());
//    return wrapper;
//}
//var result1 = wrapperCreation();
//console.log(result1);
//
//function creator(){
//    document.body.appendChild(wrapperCreation());
//}
//creator();


var app = {
    createElement: function(tagName){
        var elem = document.querySelector(tagName);
            //elem.className = className;
            //elem.innerHTML = text;
        return elem;
    }
};

var body = document.querySelector('body');
console.log(body);
var ele = app.createElement('div');
body.appendChild(ele);
