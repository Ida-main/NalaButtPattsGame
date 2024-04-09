var msg1 = document.getElementById("message1")  
var msg2 = document.getElementById("message2")  
var msg3 = document.getElementById("message3")  
var answer = Math.floor(Math.random()*100) + 1;  
var no_of_guesses = 0;  
var guesses_num = [];  
function play(){  
  var user_guess = document.getElementById("guess").value;  
  if(user_guess < 1 || user_guess > 100 ){  
    alert("Are you daft, mortal? Guess between 1 to 100!!!");  
  }  
  else{  
    guesses_num.push(user_guess);  
    no_of_guesses+= 1;  
    if(user_guess < answer){  
 msg1.textContent = "MORE PEASANT! I COMMAND MORE "  
 msg2.textContent = "No. Of Guesses : " +  
 no_of_guesses;  
 msg3.textContent = "Your last choice, peasant: " +  
 guesses_num;  
    }  
    else if(user_guess > answer){  
      msg1.textContent = "How dare thee slapp TOO much! "  
      msg2.textContent = "No. Of Guesses : " +  
      no_of_guesses;  
      msg3.textContent = "Your last choice, peasant: " +  
      guesses_num;  
    }  
    else if(user_guess == answer){  
      msg1.textContent = " Good job peasant. I guess you did well.  "  
      msg2.textContent = "The Number was " + answer  
      msg3.textContent = " It took you " +  no_of_guesses  +" tries after all! ";   
    }  
  }  
}  