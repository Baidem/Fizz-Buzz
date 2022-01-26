const printResult = document.getElementById("text");
const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");
playButton.addEventListener("click", funFizzBuzz);
stopButton.addEventListener("click", stopRun);

let index = 1;
let pass = true;

function funFizzBuzz() { /* The function is called with the -Start to play- button
    The function is timed in a loop by time interval with the setInterval method
    The variable cursor is defined by: cursor = index + 100. To determine sessions of 100 units.
        Each loop tests the index variable
        If is modulo 3: "Fizz" is saved in the tellMe variable
        If is modulo 5: tellMe + "Buzz" is saved in the tellMe variable
        If index == cursor: it's session end, setInterval is paused with clearInterval
    You can also put the pause in the -Stop- button which calls the stopRun() function
    We restart the loop with the button -Start to play- */
    if (pass == true) { // variable pass for debug playButton which, when spammed, reduces the interval and disables the clearInterval.
        pass = false;
        let cursor = index + 100;
        intervalId = setInterval(function(){
            let tellMe = "";
            if(index % 3 == 0){tellMe = "Fizz";}
            if(index % 5 == 0){tellMe = tellMe + "Buzz";}
            if(tellMe == ""){tellMe = index;}
            printResult.textContent = printResult.textContent + "[" + tellMe + "] ";
            index += 1;
            if (index == cursor) {
                clearInterval(intervalId);
                pass = true;
            }
            }, 500);    
    }
}

function stopRun(){
    clearInterval(intervalId);
    pass = true;
}