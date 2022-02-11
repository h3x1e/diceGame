    var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png",];
    var randomDice1 = Math.floor (Math.random() * dice.length);
    var randomDice2 = Math.floor (Math.random() * dice.length);

    document.querySelector(".img1, src").setAttribute("src", (dice[randomDice1]));
    document.querySelector(".img2, src").setAttribute("src", (dice[randomDice2]));

    if (randomDice1 > randomDice2) {
        document.getElementsByTagName("h2").item(0).innerHTML = "-- ✔️ Player 1 WINS! -- "
    }

    else if(randomDice1 == randomDice2){
        document.getElementsByTagName("h2").item(0).innerHTML = "-- DRAW! --"
    }
    else{
        document.getElementsByTagName("h2").item(0).innerHTML = " -- Player 2 WINS! ✔️ --"
    }

