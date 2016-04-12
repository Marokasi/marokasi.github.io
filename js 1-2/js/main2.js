
var listNames = [];

for (var i = 0; i < 5; i++) {
    var Name = prompt('Name');
    listNames.push(Name);
    console.log(listNames);
}
var userName = prompt('Write down your name');

    for( var k = 0; k < listNames.length; k++ ){
    if( userName === Name){
        alert(userName + ' ' + ', You have loged in successfully!');
        break;
    } else{
        alert('Error!!!' + 'This name does not exist');
        break;
    }
}

