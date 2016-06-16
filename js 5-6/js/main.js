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

