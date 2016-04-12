

function pow(userNumber, userDeg ){
    var result = 1;
    for( var i = 0; i < userDeg; i++){
        result *=userNumber;
    }
    return result;
}
var userNumber = prompt('Введите число, кторое хотите возвести в степень', '');
var userDeg = prompt('Введите степень, в которю хотите возвести число', '');

if(userDeg < 0){
    alert('Ваше число' + ' ' + userDeg + ' ' + 'меньше ноля!');
} else{
    alert(pow(userNumber, userDeg));
}

