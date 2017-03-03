//Part 1 - Math and Math Functions
//STEP 1
//var userNumber = prompt("Pick a number!");
//window.console.log(Math.abs(userNumber));

//STEP 2
//var userNumber = prompt("Pick a decimal number!");
//window.console.log(Math.ceil(userNumber));

//STEP 3
//var userNumber = prompt("Pick a decimal number!");
//window.console.log(Math.floor(userNumber));

//STEP 4
//var x = prompt("Pick 5 numbers and comma delimit each number!");
//var y = x.split(',');
//window.console.log(Math.max.apply(null, y));
//window.console.log(Math.min.apply(null, y));

//STEP 5
//var userNumber = prompt("Pick a number!");
//window.console.log(Math.sqrt(userNumber));

//Part 2 - Date and Date Functions 
//STEP 6
//var d = new Date();
//window.console.log(d.getDate());
//window.console.log(Date(d));

//STEP 7
//var d = new Date();
//d.setMonth(d.getMonth() + 1);
//d.setDate(0);
//window.console.log(d.getDate());

//STEP 8
//var d = new Date();
//var m = d.toDateString().split(" ");
//window.console.log(m[1]);

//STEP 9
//var d = new Date();
//if (d.getDay() === 6 || d.getDay() === 0) {
//	window.console.log("It is a weekend!");
//} else {
//	window.console.log("Sorry, it is business day!");
//}

//STEP 10
//var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//var d = new Date();
//var yesterday = days[d.getDay() - 1];
//window.console.log(yesterday);

//STEP 11
//var d = new Date();
//var m = d.toDateString().charAt(0);
//window.console.log(m);

//Part 3 - Conditional Logic and Looping Operations 
//STEP 12
//var first = prompt("Pick an integer.");
//var second = prompt("Pick an integer.");
//var a = parseInt(first, 10);
//var b = parseInt(second, 10);
//if (a > b) {
//	window.console.log(a);
//} else {
//	window.console.log(b);
//}

//STEP 13
//var students = [['Ursula', 80], ['Paul', 77], ['Henry', 88], ['Tabitha', 95], ['Lucy', 68]];
//var grade = '';
//var i;
//for (i = 0; i < students.length; i++) {
//	if (students[i][1] < 60) {
//		grade = 'F';
//	}
//	else if (students[i][1] < 70) {
//		grade = 'D';
//	}
//	else if (students[i][1] < 80) {
//		grade = 'C';
//	}
//	else if (students[i][1] < 90) {
//		grade = 'B';
//	}
//	else if (students[i][1] < 100) {
//		grade = 'A';
//	}
//	window.console.log(students[i][0] + " " + "mark is " + students[i][1] + ", " + "grade is " + grade);
//}

//STEP 14
//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//var i;
//for (i = 0; i < numbers.length; i++) {
//  if (numbers[i] % 2 === 0) {
//		window.console.log(numbers[i] + " " + 'number is even.');
//  }
//  else { 
//	  window.console.log(numbers[i] + " " + 'number is odd.');
//  }
//  }

//STEP 15
//var numbers = new Array(100);
//var i;
//for (i = 0; i < 100; i++) {
//	numbers[i] = i + 1; /* This populates the array.  +1 is necessary because arrays are 0 index based and I want to store 1-100 in it.*/
//}
//for (i = 0; i < numbers.length; i++) {
//	if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
//		window.console.log(numbers[i] + " " + "FizzBuzz");
//	}
//else if (numbers[i] % 5 === 0) {
//	window.console.log(numbers[i] + " " + "Buzz");
//	}
//else if (numbers[i] % 3 === 0) {
//	window.console.log(numbers[i] + " " + "Fizz");
//    }
//else {
//	window.console.log(numbers[i]);
//}
//}

//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game
//Step1
//var respond = confirm("Are you ready to play the game?");
//if (respond == true) {
//	alert("Awesome, our hero is waiting!");
//} else {
//	alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//}
////Step2
//alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
////Step3
//var answer = prompt("Which direction would you like to head (please enter forward, left, or right).");
////Step4
//switch (answer) {
//	case "forward":
//		alert("You walk about 100 yards and safely make your way out of the cave.");
//		break;
//	case "left":
//		alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//		break;
//	case "right":
//		alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//		break;
//	default:
//		alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//}
//Step5&6
//var question = prompt("Rate your game on a scale of 1 to 10.");
//question = parseInt(question, 10);
////alert(typeof question);
//if (question >= 1 && question <= 10) {
//	if (question >= 6 && question <= 10) {
//	alert("Thank you, we will continue to make improvements to the game!");
//	} else if (question >= 1 && question <= 5) {
//	alert("Whatever, you weren’t very good at this game anyway!");
//	} 
// }
//else {
//		alert("Thank you, we will continue to make improvements to the game!");
//	}

//Part 5 - The “Coin Flip” Game
//var coinFlip = Math.random();
//alert(coinFlip);
//var result = " ";
//var choice = prompt('Please select "heads" or "tails"');
////alert(typeof choice);
//if (coinFlip >= 0 && coinFlip <= 0.5) {
//	result = "heads";
//	//alert(result);
//} else if (coinFlip > 0.5 && coinFlip <=1) {
//	result = "tails";
//	//alert(result);
//}
//if (result === "heads" && choice === "heads") {
//	alert("The flip was heads and you chose heads...you win!");
//} else if (result === "heads" && choice === "tails") {
//	alert("The flip was heads but you chose tails...you lose!");
//} else if (result === "tails" && choice === "heads") {
//	alert("The flip was tails but you chose heads...you lose!");
//} else if (result === "tails" && choice === "tails") {
//	alert("The flip was tails and you chose tails...you win!");
//}


//Part 5 - The “Coin Flip” Game (step 8)
//var coinFlip = Math.random();
////alert(coinFlip);
//var result;
//var preference;
//var choice = prompt('Please select "heads" or "tails"');
//if (choice === "heads") {
//	preference = false;
//} else if (choice === "tails") {
//	preference = true;
//}
////alert(typeof preference);
//if (coinFlip >= 0 && coinFlip <= 0.5) {
//	coinFlip = Math.floor(coinFlip);
//	result = false;
//	//alert(coinFlip);
//} else if (coinFlip > 0.5 && coinFlip <=1) {
//	coinFlip = Math.ceil(coinFlip);
//	result = true;
//	//alert(coinFlip);
//}
//if (result === false && preference === false) {
//	alert("The flip was heads and you chose heads...you win!");
//} else if (result === false && preference === true) {
//	alert("The flip was heads but you chose tails...you lose!");
//} else if (result === true && preference === false) {
//	alert("The flip was tails but you chose heads...you lose!");
//} else if (result === true && preference === true) {
//	alert("The flip was tails and you chose tails...you win!");
//}

//Part 6 - The “Coin Flip” Game Redux
//var coinFlip;
//var i;
//for (i = 0; i < 10; i++) {
//	coinFlip = Math.random();
//	coinFlip = Math.round(coinFlip);
//	//alert(coinFlip);
//	if (coinFlip === 0) {
//		window.console.log("Heads");
//	} else if (coinFlip === 1){
//		window.console.log("Tails");
//	}
//}

//Part 7 - The “Coin Flip Streak” Game
//var coinFlip;
//do {
//	coinFlip = Math.random();
//	coinFlip = Math.round(coinFlip);
//	alert(coinFlip);
//	if (coinFlip === 0) {
//		window.console.log("Heads");
//	} else if (coinFlip === 1){
//		window.console.log("Tails");
//	}
//} while (coinFlip === 0);

//Part 8 – Looping a Triangle
//var i;
//var j;
//var a;
//for (i = 0; i < 7; i++) {
//	var a = "#";
//	for (j = 1; j <= i; j++) {
//		a = a + " " + "#";
//	}
//	window.console.log(a);
//}

//Part 9 – Odd or Even?
//var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//var i;
//for (i = 0; i < 15; i++) {
//  if (numbers[i] % 2 === 0) {
//		window.console.log(numbers[i] + " " + 'is even.');
//  }
//  else { 
//	  window.console.log(numbers[i] + " " + 'is odd.');
//  }
//  }

