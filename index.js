let diceRolls = diceRolls[5];
let diceValues = diceValues[5];
let FIGURES = FIGURES[
        ["Brelan", 28],
        ["Carré", 35],
        ["Full", 30],
        ["Grande suite", 40],
        ["YAMS", 50]
        //Add chance, or not
    ];

function checkDiceRolls(){
    diceRolls.foreach((roll) => {
        diceValues[roll]++;
    });

    if(diceRolls[0] < diceRolls[1] && diceRolls[1] < diceRolls[2] && diceRolls[2] < diceRolls[3] && diceRolls[3] < diceRolls[4] ){
                //Grande suite
                showResult(FIGURES[3]);
    } else {
        diceValues.foreach((value, index) => {
            if(value === 5){
                //YAMS
                showResult(FIGURES[4]);
            }
            else if(value === 4){
                //Carré
                showResult(FIGURES[1]);
            }
            else if(value === 3){
                
                //check paire
                
                //Brelan
                showResult(FIGURES[1]);
            }
        });
    }

}
function showResult(score){

}