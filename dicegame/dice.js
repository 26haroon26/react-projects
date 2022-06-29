<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Game</title>
    <link rel="stylesheet" href="dice.css">
    <script src="dice.js"></script>
</head>

<body>
    <div>
        <form onsubmit="PlayerName();return false " id="Name">
            <label for="player1">Player1 Name :</label><br><br>
            <input type="text" id="player1" placeholder="Enter Your Name"><br><br>
            <label for="player2">Player2 Name :</label><br><br>
            <input type="text" id="player2" placeholder="Enter Your Name"><br><br>
            <button type="submit">OK</button>
        </form>
    </div>
    <!-- <button onclick="start()">Start</button> -->
    <div id="nameshow">
        <div id="name1"></div>
        <div id="name2"></div>
        <div id="player1Score">Score</div>
        <div id="player2Score">Score</div>
    </div>
    <div class="container" id="maindiv">
        <h1>Dice Game</h1>
        <p id="resultText">Well Come to Dice Game</p>

        <div class="dice">
            <p>Player 1</p>
            <img id="image2" src="images/dice6.PNG" height="70%" width="50%">
        </div>

        <div class="dice">
            <p>Player 2</p>
            <img id="image1" src="images/dice6.PNG" height="70%" width="50%">
        </div>
    </div>
    <button onclick="change()" class="btn" id="6times">Spin</button>
    <button onclick="reset()" class="btn" id="refresh">Reset</button>

</body>

</html>
