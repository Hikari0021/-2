/*
 Write a JavaScript conditional statement to sort three numbers.
 Display an alert box to show the results.
 */

//Declare set of numbers
let number = [12, 1,-6]
//Sort the numbers at ascending order
number.sort(function (a, b)
{
    return a -b
})
//Output as an alert
alert(number);
