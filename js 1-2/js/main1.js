

var pow = function() {
   var result =  Math.pow(myNumber, myDeg);
    return result;
};
var myNumber = prompt('Введите число, кторое хотите возвести в степень', '');
var myDeg = prompt('Введите степень, в которю хотите возвести число', '');

if( myDeg < 0) {
    alert('Ваше число' + ' ' + myDeg + ' ' + 'меньше ноля!');

} else{
    alert(pow());
}





