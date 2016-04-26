var arrName = [];

for (var i = 0; i < 5; i++) {
    var name = prompt('Name');
    arrName.push(name);
}
var userName = prompt( 'Write down your name' );

    for( var k = 0; k < arrName.length; k++ ) {
    //if(!name) {
        //    alert( 'You did not put anything!!!' );
        //    break;
        //}else if( userName === name ) {
        //    alert( userName + ' , You have loged in successfully!' );
        //    break;
        //}else {
        //    alert( 'Error!!! The name' + ' ' + userName + ' ' + ' does not exist' );
        //    break;
        //}
        if( userName === name ) {
            alert( userName + ' , You have loged in successfully!' );
            break;
        }
        if (k == arrName.length) {
            alert( 'Error!!! The name' + ' ' +userName + ' ' + 'does not exist' );
            break;
        }
}






