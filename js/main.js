let bulbasaurCounter = 1;
let charmanderCounter = 1;
let squirtleCounter = 1;

let levelUp = new Audio("sounds/10-levelUp.mp3")
let evolSound = new Audio("sounds/11-evolution.mp3")

let bulbasaurSound = new Audio("sounds/01-bulbasaurSound.mp3")
let ivysaurSound = new Audio("sounds/02-ivysaurSound.mp3")
let venusaurSound = new Audio("sounds/03-venusaurSound.mp3")

let charmanderSound = new Audio("sounds/04-charmanderSound.mp3")
let charmeleonSound = new Audio("sounds/05-charmeleonSound.mp3")
let charizardSound = new Audio("sounds/06-charizardSound.mp3")

let squirtleSound = new Audio("sounds/07-squirtleSound.mp3")
let wartortleSound = new Audio("sounds/08-wartortleSound.mp3")
let blastoiseSound = new Audio("sounds/09-blastoiseSound.mp3")

let error = new Audio("sounds/12-error.mp3");

function selection(numSelect) {

    if (numSelect === 1) {
        if (bulbasaurCounter < 16) {
            bulbasaurCounter += 1;
            document.getElementById("bulbasaurLevel").innerHTML = bulbasaurCounter;
            levelUp.play();
        }
        if (bulbasaurCounter > 16 && bulbasaurCounter < 32) {
            bulbasaurCounter += 1
            document.getElementById("bulbasaurLevel").innerHTML = bulbasaurCounter;
            levelUp.play();
        }
        if (bulbasaurCounter > 32 && bulbasaurCounter < 100){
            bulbasaurCounter += 1
            document.getElementById("bulbasaurLevel").innerHTML = bulbasaurCounter;
            levelUp.play();
        }
        if (bulbasaurCounter === 100){
            error.play();
        }
    }
    if (numSelect === 2) {
        if (bulbasaurCounter === 16) {
            evolSound.play();
            document.getElementById("evolBulbasaur").innerHTML = '<img class="img-fluid" src="imgs/02-ivysaur.png">';
            document.getElementById("namePokemon1").innerHTML = "Ivysaur";
            bulbasaurCounter += 1;
            document.getElementById("bulbasaurLevel").innerHTML = bulbasaurCounter
        } else if (bulbasaurCounter === 32) {
            evolSound.play()
            document.getElementById("evolBulbasaur").innerHTML = '<img class="img-fluid" src="imgs/03-venusaur.png">';
            document.getElementById("namePokemon1").innerHTML = "Venusaur";
            bulbasaurCounter += 1;
            document.getElementById("bulbasaurLevel").innerHTML = bulbasaurCounter
        }
    }
    if (numSelect === 3) {
        if (bulbasaurCounter <= 16){
            bulbasaurSound.play();
        } else if (bulbasaurCounter > 16 && bulbasaurCounter <= 32){
            ivysaurSound.play();
        } else if (bulbasaurCounter > 32){
            venusaurSound.play();
        }
    }


    if (numSelect === 4) {
        if (charmanderCounter < 16) {
            charmanderCounter += 1;
            document.getElementById("charmanderLevel").innerHTML = charmanderCounter;
            levelUp.play();
        }
        if (charmanderCounter > 16 && charmanderCounter < 36) {
            charmanderCounter += 1
            document.getElementById("charmanderLevel").innerHTML = charmanderCounter;
            levelUp.play();
        }
        if (charmanderCounter > 36 && charmanderCounter < 100){
            charmanderCounter += 1
            document.getElementById("charmanderLevel").innerHTML = charmanderCounter;
            levelUp.play();
        }
        if (charmanderCounter === 100){
            error.play();
        }
    }
    if (numSelect === 5) {
        if (charmanderCounter === 16) {
            evolSound.play();
            document.getElementById("evolCharmander").innerHTML = '<img class="img-fluid" src="imgs/05-charmeleon.png">';
            document.getElementById("namePokemon2").innerHTML = "Charmeleon";
            charmanderCounter += 1;
            document.getElementById("charmanderLevel").innerHTML = charmanderCounter
        } else if (charmanderCounter === 36) {
            evolSound.play()
            document.getElementById("evolCharmander").innerHTML = '<img class="img-fluid" src="imgs/06-charizard.png">';
            document.getElementById("namePokemon2").innerHTML = "Charizard";
            charmanderCounter += 1;
            document.getElementById("charmanderLevel").innerHTML = charmanderCounter
        }
    }
    if (numSelect === 6) {
        if (charmanderCounter <= 16){
            charmanderSound.play();
        } else if (charmanderCounter > 16 && charmanderCounter <= 36){
            charmeleonSound.play();
        } else if (charmanderCounter > 36){
            charizardSound.play();
        }
    }


    if (numSelect === 7) {
        if (squirtleCounter < 16) {
            squirtleCounter += 1;
            document.getElementById("squirtleLevel").innerHTML = squirtleCounter;
            levelUp.play();
        }
        if (squirtleCounter > 16 && squirtleCounter < 36) {
            squirtleCounter += 1
            document.getElementById("squirtleLevel").innerHTML = squirtleCounter;
            levelUp.play();
        }
        if (squirtleCounter > 36 && squirtleCounter < 100){
            squirtleCounter += 1
            document.getElementById("squirtleLevel").innerHTML = squirtleCounter;
            levelUp.play();
        }
        if (squirtleCounter === 100){
            error.play();
        }
    }
    if (numSelect === 8) {
        if (squirtleCounter === 16) {
            evolSound.play();
            document.getElementById("evolSquirtle").innerHTML = '<img class="img-fluid" src="imgs/08-wartortle.png">';
            document.getElementById("namePokemon3").innerHTML = "Wartortle";
            squirtleCounter += 1;
            document.getElementById("squirtleLevel").innerHTML = squirtleCounter
        } else if (squirtleCounter === 36) {
            evolSound.play()
            document.getElementById("evolSquirtle").innerHTML = '<img class="img-fluid" src="imgs/09-blastoise.png">';
            document.getElementById("namePokemon3").innerHTML = "Blastoise";
            squirtleCounter += 1;
            document.getElementById("squirtleLevel").innerHTML = squirtleCounter 
        }
    }
    if (numSelect === 9) {
        if (squirtleCounter <= 16){
            squirtleSound.play();
        } else if (squirtleCounter > 16 && squirtleCounter <= 36){
            wartortleSound.play();
        } else if (squirtleCounter > 36){
            blastoiseSound.play();
        }
    }
}
