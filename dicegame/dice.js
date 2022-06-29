
let randomNunmber1, randomDiceImage1, randomImagePath1, image1, randomNunmber2, randomDiceImage2, randomImagePath2, image2, score1, score2;
// document.getElementById('refresh').style.display = "none";
// function start() {

// }
// for (let i = 0; i < 6; i++) {

function change() {
    score1 = document.getElementById("player1Score");
    score2 = document.getElementById("player2Score");
    randomNunmber1 = Math.floor(Math.random() * 6) + 1;
    randomDiceImage1 = "dice" + randomNunmber1 + ".png";
    randomImagePath1 = "images/" + randomDiceImage1;
    image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImagePath1);

    randomNunmber2 = Math.floor(Math.random() * 6) + 1;
    randomDiceImage2 = "dice" + randomNunmber2 + ".png";
    randomImagePath2 = "images/" + randomDiceImage2;
    image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImagePath2);
    console.log("randomNunmber1  ", randomNunmber1);
    console.log("randomNunmber2  ", randomNunmber2);

    score1.innerHTML ="Player1 Score is " + " " + Number(randomNunmber1);
    score2.innerHTML ="Player2 Score is " + " " + Number(randomNunmber2);

    if (randomNunmber1 > randomNunmber2) {
        document.querySelector("#resultText").innerHTML = "Player 1 Wins!";
    }
    else if (randomNunmber1 < randomNunmber2) {
        document.querySelector("#resultText").innerHTML = "Player 2 Wins!";
    }
    else if (randomNunmber1 == randomNunmber2) {
        document.querySelector("#resultText").innerHTML = "Draw!";
    }
}
// }
// document.getElementById('6times').style.display = "none";
// document.getElementById('refresh').style.display = "block";



function reset() {
    randomNunmber1 = "";
    randomDiceImage1 = "";
    randomImagePath1 = "";
    image1 = "";
    randomNunmber2 = "";
    randomDiceImage2 = "";
    randomImagePath2 = "";
    image2 = "";
    score1.innerHTML = "Player1 Score";
    score2.innerHTML = "Player2 Score";
    document.querySelector("#resultText").innerHTML = "Well Come to Dice Game";
   
}


// document.querySelectorAll("button")[0].addEventListener("click", rollDice);
// document.querySelectorAll("button")[1].addEventListener("click", reset);
