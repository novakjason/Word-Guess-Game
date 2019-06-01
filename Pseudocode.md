--------------------->        Word guess Pseudocode      <----------------------------


//  Create DOM using Bootstrap

Display:

    "Press Any Key to Start!" page before loading initial word.

    Game Screen:
        
        DOM changes to display NEW GAME with first RANDOM WORD selected from the random word array.
        Underscores are displayed in place of each letter.
        As user guesses the correct letters, they are revealed.
            *Bonus:  divs displaying the underscores or letters are uniform in size so word doesn't change width on the screen*
        
        
        Number of guesses remaining.

        Incorrect letters guessed.

        Number of wins.  (Win streak - resets after user loses)



Javascript--------------->


Create array of random words for user to guess.

Choose random word to display.

Display an underscore in place of each letter of the random word.

Get users guess via keyboard input.

Check to see if users guess is correct.
    -If correct push selected letter to display in place of designated underscore.
    -If incorrect push selected letter to display in incorrect letter array and subtract 1 guess from guesses remaining object.
 
Empty array for incorrect letters guessed.

Object for guesses remaining and number of wins.

