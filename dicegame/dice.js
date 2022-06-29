let randomNunmber1, randomDiceImage1, randomImagePath1, image1, randomNunmber2, randomDiceImage2, randomImagePath2, image2, score2,score1;
let getname1 = document.querySelector("#player1");
let getname2 = document.querySelector("#player2");
let name1 = document.querySelector("#name1");
let name2 = document.querySelector("#name2");

// document.getElementById('6times').style.display = "none";
// document.getElementById('refresh').style.display = "none";
// document.getElementById("nameshow").style.display = "none";
// document.getElementsById('maindiv').style.display = "none";



function PlayerName() {

    name1.innerHTML = getname1.value;
    name2.innerHTML = getname2.value;
    document.getElementById("nameshow").style.display = "block";
    document.getElementById('6times').style.display = "block";
    document.getElementById("Name").style.display = "none";

}
// document.getElementsById("maindiv").style.display = "block";
var dis = 0;
let number1 = [];
let number2 = [];
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
    number1.push(randomNunmber1);
    number2.push(randomNunmber2);
    console.log("number1  ", number1);
    console.log("number2  ", number2);

    var totalnumber1 = 0;
    for (var i=0; i<number1.length; i++){
        totalnumber1 += +number1[i];
    }
    console.log(totalnumber1); 
    
    var totalnumber2 = 0;
    for (var i=0; i<number2.length; i++){
        totalnumber2 += +number2[i];
    }
    console.log(totalnumber2);
    score1.innerHTML = "score is : " + Number(totalnumber1);
    score2.innerHTML = "score is : " + Number(totalnumber2);

    dis = dis + 1;
    console.log("dis", dis);
    if (dis == 6) {


document.getElementById('6times').style.display = "none";
        // document.getElementById('refresh').style.display = "block";
    
        if (totalnumber1 > totalnumber2) {
            document.querySelector("#resultText").innerHTML = "Player 1 Wins!";
        }
        else if (totalnumber1 < totalnumber2) {
            document.querySelector("#resultText").innerHTML = "Player 2 Wins!";
        }
        else if (totalnumber1 == totalnumber2) {
            document.querySelector("#resultText").innerHTML = "Draw!";
        }
    
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
    dis=0;
    document.querySelector("#resultText").innerHTML = "Well Come to Dice Game";
number1=[];
number2=[];
totalnumber1=0;
totalnumber2=0;
document.getElementById('6times').style.display = "block";

}
