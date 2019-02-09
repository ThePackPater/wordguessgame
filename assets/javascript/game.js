<Script type="text/javascript">

var wordBank = ["partner", "rustler", "sheriff", "cowpoke", "western", "rawhide", "cowgirl", "buzzard", "lawless", "justice", "gallows"];

var hiddenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var playerGuess = ["A"||"B"||"C"||"D"||"E"||"F"||"G"||"H"||"I"||"J"||"K"||"L"||"M"||"N"||"O"||"P"||"Q"||"S"||"T"||"U"||"V"||"W"||"X"||"Y"||"Z"];

var badShots = [];

var misses = 13;

var goodShots = [];

var placeHolder = [];

for (var i = 0; i < hiddenWord.length; i++) {

    placeHolder.push("_");

}

document.onkeyup = function startGuessing() {

    document.getElementById("playerGuess").innerHTML = placeHolder.join(" ");

   document.getElementById("playerGuess").innerHTML = secretBlanks(hiddenWord)

}

</Script>