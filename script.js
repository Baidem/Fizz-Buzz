const play = document.getElementById("playButton");
play.addEventListener("click", funFizzBuzz);


function funFizzBuzz() {
    for (let index = 1; index < 101; index++) {
        let tellMe = ""; // save
        if (index % 3 == 0) { // si modulo de 3, Fizz est save.
            tellMe = "Fizz";
        }
        if (index % 5 == 0) { // si modulo de 5, Buzz est save, si un Fizz est déja save, il est concervé.
            tellMe = tellMe+"Buzz";
        }
        if (tellMe == "") { // si ni Fizz ni Buzz de save, l'index est save.
            tellMe = index;
        }
        // on décharge la save en la print.
                // un petit délais entre chaque print est souhaité, mais la fonction setTimeout ne fonctionne pas comme voulue. Des problèmes de bind à résoudre.
        setTimeout(() => {document.getElementById("text").innerHTML = document.getElementById("text").innerHTML+"["+tellMe+"] "}, 500);
    }
}

// la suite du projet et de print la suite par paquets de 100 unités à chaques préssions du bouton. Un changement de message sur le bouton est souhaité.