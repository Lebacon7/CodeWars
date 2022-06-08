/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/
function move (position, roll) {
    //this is systems of equations 4x2 = 8 so we will presume that the second column = 2.  Using #2, 6x2=12  15-12 = 3, this is confirmed.  One more check, 5x2=10 12-10=2, confirmed again.  First column is worth One, second worth 2.
    return position+roll*2
  }