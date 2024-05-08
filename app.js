/* Task # 26: Alien Colours #2:Choose a colour for an alien as you did in Exercise
no 25, and write an if-else chain.
*If the alien colour is Green, print a statement that the player just earned 5 points
for shooting the alien.
* write one version of this program that runs that if block and another that runsthe else bloc*/
// Ist version:
var alien_colour = "green";
if (alien_colour === "green") {
    console.log("congratulation! you just earned 5 points:");
}
else {
    console.log("congratulation ! you just earned 10 points");
}
// 2nd version:
alien_colour = "red";
if (alien_colour === "green") {
    console.log("congratulation ! you just earned 5 points:");
}
else {
    console.log(" congratulation ! you just earned 10 points:");
}
