
function createQuestion() {
    var box = document.createElement('div');
    box.classList.add('box');


    /*create form*/
    var form = document.createElement('form');
    var label = document.createElement('label');
    label.setAttribute('for', 'variant');
    var item = document.createElement('div');
    item.classList.add('item');
    for(var k = 0; k < 3; k++) {
        form.appendChild(item.cloneNode(true));
        for(var i = 0; i < 1; i++) {
            item.appendChild(createInput());
            item.appendChild(label.cloneNode(true)).innerHTML = 'Question variant Number ' + (j + 1);
        }
    }
    box.appendChild(form);
    return box;
}
/*creation of input*/
function createInput() {
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'variant');
    input.setAttribute('value', 'answer');
    return input;
}
/*create button*/
function createButton() {
    var button = document.createElement('input');
    button.classList.add('btn');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'check the result');
    return button;
}
/*creation of title of questionarie*/
function titleCreation() {
    var title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = 'Test In Programming';
    return title;
}


/*input sets titel*/
function createH2() {
    var titleSection = document.createElement('h2');
    titleSection.innerHTML = (j + 1) +'. Question number '+ (j + 1);
    return titleSection;
}

/*create wrapper*/
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
wrapper.appendChild(titleCreation());
for(var j = 0; j <3; j++){
    wrapper.appendChild(createH2());
    wrapper.appendChild(createQuestion());
}
wrapper.appendChild(createButton());



var questionList = {
    name: 'Test In Programming',
    createQuestion: function createQuestion() {},
    createInput: function createInput() {},
    createButton: function createButton() {},
    titleCreation: function titleCreation() {},
    createH2: function createH2() {}
};