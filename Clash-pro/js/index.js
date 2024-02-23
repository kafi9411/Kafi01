function continueGame (){
   const leters = ramdomAlphabet();

   const display =document.getElementById('current-alphabet')
   display.innerText=leters;

   setBackGroundColour(leters)

}



function playGame(){
   hiddenElement ('home')
   showElement ('playGround')
   continueGame ()
}


