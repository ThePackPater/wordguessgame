 

            var guess;
            var letters = [];
            var wrongLetters = [];
            var wrong = 9;
            var correctGuesses = 0;

            var wordList = ["partner", "rustler", "cowpoke", "western", "rawhide", "cowgirl", "chicken", "justice"];

            var word = wordList[Math.floor(Math.random() * wordList.length)];

            function getStarted() {

                for (i = 0; i < word.length; i++) {

                    letters[i] = "_";

                }

                document.getElementById("goodShots").innerHTML = letters.join(" ");

                console.log(word);

            }

            function writeorWrong() {

                document.onkeyup = function (event) {

                    guess = event.key.toLowerCase();

                    var found = false;

                    for (i = 0; i < word.length; i++) {

                        if (guess === word[i]) {

                            letters[i] = guess;

                            document.getElementById("goodShots").innerHTML = letters.join(" ");

                            found = true;

                            correctGuesses++;

                            if (correctGuesses === 7) {

                                location.replace("youwin.html");

                            }

                        }
                    }

                    if (found) return;

                    if (wrongLetters.indexOf(guess) < 0) {

                        wrongLetters.push(guess);

                        document.getElementById("badShots").innerHTML = wrongLetters.join(" ");

                        wrong--;

                        document.getElementById("wrong").innerHTML = wrong;

                        if (wrong === 0) {

                            location.replace("youlose.html");

                        }

                    }
                }
            }

            getStarted();

            writeorWrong();

