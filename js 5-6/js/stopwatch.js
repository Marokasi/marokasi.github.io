function stopWatch(elem){
    var time = 0;
    var interval;
    var offSet;

    function update(){
        if(this.isOn) {
            time += delta();
        }
        var timeFormatted = formatter(time);
        elem.textContent = timeFormatted;
    }

    function delta(){
        var now = Date.now();
        var timePassed = offSet - now;
        now = offSet;
        return now;
    }

    function formatter(getTimeInMilliseconds){
        var time = new Date(getTimeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
        if(minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if(seconds.length < 2) {
            seconds = '0' + seconds;
        }
        while(milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }
        return minutes + ' : ' + seconds + ' . ' + milliseconds;
    }
    this.isOn = false;
    this.start = function(){
        if(!this.isOn) {
            interval = setInterval(update.bind(this), 100);
            offSet = Date.now();
            this.isOn = true;
        }
    };
    this.stop = function(){
        if(this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    this.reset = function(){
        if(!this.isOn) {
            time = 0;
            update();
        }
    };
};



