function speedDetector(){
    let speed = document.getElementById('speed').value;
    
    if (speed < 70){
        document.getElementById('ticket').innerHTML = 'Your speed is OK'
    }
    else if(speed > 70 && speed < 76){
        document.getElementById('ticket').innerHTML = 'You have 1 demerit point'
    }
    else if(speed > 75 && speed < 81){
        document.getElementById('ticket').innerHTML = 'You have 2 demerit points'
    }
    else if(speed > 80 && speed < 86){
        document.getElementById('ticket').innerHTML = 'You have 3 demerit point'
    }
}