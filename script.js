const printResult = document.getElementById("text");
const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");
playButton.addEventListener("click", funFizzBuzz);
stopButton.addEventListener("click", stopRun);

let index = 1;
let pass = true;

function funFizzBuzz() { /* La fonction est appelée avec le bouton -Start to play-
    La fonction est cadencée en boucle par interval de temps avec la méthode setInterval
    La variable cursor est défini par : cursor = index + 100. Pour déterminer des session de 100 unités.
        Chaque boucle test la variable index
        Si est modulo de 3 : "Fizz" est save dans la variable tellMe
        Si est modulo de 5 : tellMe + "Buzz" est save dans la variable tellMe
        Si index == cursor : c'est la fin session, setInterval est mise en pause avec clearInterval
    On peut aussi mettre la pause en le bouton -Stop- qui appelle la fonction stopRun()
    On relance la boucle avec le bouton  -Start to play- */
    if (pass == true) { // variable pass pour debugger playButton qui, quand on le spam, réduit l'interval et inactive le clearInterval
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