let getname1;
let getname2;
let name1;
let name2;

function PlayerName() {
    getname1 = document.querySelector("#player1");
    getname2 = document.querySelector("#player2");
    name1 = document.querySelector("#name1");
    name2 = document.querySelector("#name2");

    name1.innerHTML = getname1.value;
    name2.innerHTML = getname2.value;
    document.getElementById('6times').style.display = "block";
    document.getElementById('maindiv').style.display = "block";
    document.getElementById('nameshow').style.display = "block";
    document.getElementById("Name").style.display = "none";

}
let randomNumber1, randomDiceImage1, randomImagePath1,
    image1, randomNumber2, randomDiceImage2, randomImagePath2,
    image2, score2, score1;

let dis = 0;
let number1 = [];
let number2 = [];
function change() {

    document.getElementById('6times').value = "Roll " + `(${2 + dis})` + " times";
    document.getElementById('refresh').style.display = "none";

    score1 = document.getElementById("player1Score");
    score2 = document.getElementById("player2Score");
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomDiceImage1 = "dice" + randomNumber1 + ".png";
    randomImagePath1 = "images/" + randomDiceImage1;
    image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImagePath1);

    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    randomDiceImage2 = "dice" + randomNumber2 + ".png";
    randomImagePath2 = "images/" + randomDiceImage2;
    image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImagePath2);

    number1.push(randomNumber1);
    number2.push(randomNumber2);

    var totalnumber1 = 0;
    for (var i = 0; i < number1.length; i++) {
        totalnumber1 += +number1[i];
    }
    console.log(totalnumber1);
    var totalnumber2 = 0;
    for (var i = 0; i < number2.length; i++) {
        totalnumber2 += +number2[i];
    }
    console.log(totalnumber2);
    score1.innerHTML = "Score  : " + Number(totalnumber1);
    score2.innerHTML = "Score  : " + Number(totalnumber2);

    dis = dis + 1;
    console.log("dis", dis);
    if (dis == 6) {

        document.getElementById('6times').style.display = "none";
        if (totalnumber1 > totalnumber2) {
            document.querySelector("#resultText").innerHTML = `${getname1.value} Wins!`;
        }
        else if (totalnumber1 < totalnumber2) {
            document.querySelector("#resultText").innerHTML = `${getname2.value} Wins!`;
        }
        else if (totalnumber1 == totalnumber2) {
            document.querySelector("#resultText").innerHTML = "Draw!";
        }
        document.getElementById('refresh').style.display = "block";
    }

}

function reset() {
    randomNumber1 = "";
    randomDiceImage1 = "";
    randomImagePath1 = "";
    image2.src = "images/dice6.PNG";
    image1.src = "images/dice6.PNG";
    randomNumber2 = "";
    randomDiceImage2 = "";
    randomImagePath2 = "";
    score1.innerHTML = "Score is : 0";
    score2.innerHTML = "Score is : 0";
    dis = 0;
    document.getElementById('6times').value = `Roll (1) times`;
    document.querySelector("#resultText").innerHTML = "Well Come to Dice Game";
    number1 = [];
    number2 = [];
    totalnumber1 = 0;
    totalnumber2 = 0;
    document.getElementById('6times').style.display = "block";

}
