// create Guessing game with Function 
function miniGame (Num){
    let randomNum= Math.floor(Math.random()*21)
    let attempt = 0
      let maxattempt= 10 
    while (maxattempt>attempt){
      let guess = parseInt(prompt("Enter your guess  " + (maxattempt-attempt)+ " trials left" ))
    if(isNaN(guess)){
    alert("Enter valid Number")
    continue; 
    }
      attempt++
    if (guess>randomNum){
    alert("you guessed higher try lower")
    }
    else if (guess<randomNum){
    alert("You guessed lower try higher")
    }
    else {
      alert("Congratulation you got the Number \n the Number was " +  randomNum)
      break ; 
    }
    }
      if (maxattempt===attempt){
    alert("you reached the trial limit please refresh to try again")
      }
    }
      
    miniGame()
    