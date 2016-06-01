var timer = document.querySelector('#timer');
var toggle = document.querySelector('#toggle');
var reset = document.querySelector('#reset');

var watch = new stopWatch(timer);

toggle.addEventListener('click', function(){
    if(watch.isOn) {
        watch.stop();
        toggle.innerHTML = 'Start';
    } else{
        watch.start();
        toggle.innerHTML = 'Pause';
    }
});

reset.addEventListener('click', function(){
    watch.reset();
});

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};
var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};
function prequal(car){
    if(car.mileage > 10000) {
        return false;
    } else if(car.year > 1960) {
        return false;
    }else {
        return true
    }
}
var result = prequal(chevy);

if(result){
    console.log('You would better go and cheque that' + ' ' + car.model);
}else{
    console.log('forget about that old ' + ' ' + car.model);
}