//variables
var minNumber = 0;
var maxNumber = 5;
var rewards =[10,5,2,0];
//messages
var wannaPlayMsg = 'Чи бажаєте почати гру?';
var cancelGameFirst = "Cьогодні ви не виграли мільйон, а могли";
var mainMsg = "Оберіть число від " +minNumber+ " до "+maxNumber;
var loseGameTottaly = "Ваш виграш - 0$";
var playAgainMsg = "Зіграймо ще раз?";
var keepPlayingMsg = " Продовжити гру?";
var exitGame = "Дякуємо за гру, ваш виграш становить ..."
//console.log(mainMsg);

function gameStarter() {
    if (confirm(wannaPlayMsg)) {
      doGame();
    } else {
        console.log(cancelGameFirst);
    }
}

function doGame(){
    var turns = 0;// trys
    //  var userNumber = prompt(mainMsg);
    var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    console.log("Game informer:")
    console.log("Randomed Number is: " + randomNumber);

    do
        {
        var userNumber = prompt(mainMsg);
        turns++;

        if (userNumber == randomNumber) {
            confirm("Ви вгадали! Ваш виграш:" +rewards[0]+ " "+keepPlayingMsg);
            }

            else  {
                console.log("Не пощастило, спробуй ще!");
            }
        }

        while (turns < 3 && userNumber != randomNumber);
        console.log("Winning Turn: " + turns);
        //win game TBA

        //lose game TBA

        //if user lost 3 attepts
    if (userNumber !== randomNumber) {
            console.log(loseGameTottaly);
            if(!confirm(playAgainMsg))
            return false;
              else {
              return doGame();
            }


            }
//
//console.log("Turn: " + turns);
console.log("Game informer:")
console.log("Randomed Number is: " + randomNumber);
console.log("User Input: " + userNumber);
console.log("Turn:" + turns);
//console.log("Reward: " +rewards[2])
}
