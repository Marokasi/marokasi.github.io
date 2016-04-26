var listNames = [];
for(var i = 0; i < 5; i++) {
    var name = prompt('Name');
    listNames.push(name);
}
var userName = prompt('Write down your name');
for(var k = 0; k < listNames.length; k++) {
    if(!name) {
        console.log('You did not put anything!!!');
        break;
    }
    if(userName === listNames[k]) {
        console.log(userName + ' , You have loged in successfully!');
        break;
    }
    if(k == listNames.length) {
        console.log('Error!!! The name' + ' ' +userName + ' ' + 'does not exist');
        break;
    }
}






