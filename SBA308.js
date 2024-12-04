// Section 1
// JavaScript Total Recall

//A. Q + A
//  *****************
// How do we assign a value to a variable?
// to assign a value to a variable we use the assignment operator =
// exemple let A=2, the variable A takes the value 2.

// ******************

// How do we change the value of a variable?

// to change the vavalue of a variable we  simply reassign the new value to the variable, as js takes always the last
// value of a variable. eg A = 7; now we have changed the value of the variable A to 7.
//
// ******************************
//
// How do we assign an existing variable to a new variable?
// to assign an existing variable to a new variabl
// we give the first variable as value to the last varible.
//  eg: let x = 7;
//       let y = x ; // now y ==x;

//  **********************************
// Remind me, what are declare, assign, and define?
//
//    declare a variable is like reserve a place for that variable in the storage.
//   assign a vvariable is to link that variable to a specific value.
//    define a variable is to make it recognizable by the programming languange.

//  ********************************
//      What is pseudocoding and why should you do it?
//
//       i would like to say that pseudocoding is a list of steps that we follow to reach the result that we want,
// it is necessary to build a propre programe and avoid errors and problems during the process operation.
// ***********************************
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// honstly,i do not know, but after some researches on google, it turn out
// that it is a common guide line to spend 70-80% of time thinking and plannig
// how to solve the problem and the rest in coding.

//  ************************************************************************************************

// // B.strings
// // question 1
//  let firstVariable;
//  // question 2
// firstVariable = "hello world";
// // question 3
// firstVariable = 7;
// // question 4
// let secondVariable = firstVariable;
// // question 5
// secondVariable = "thank you per scholas"
// // question 6
// // he value of firstVariable still 7 ;

// // question 7
// let myname = "abdou"
// console.log(`hello,my name is ${myname}` );

//********************************************************************** */

//BOOLEANS

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";

// console.log(a < b);
// console.log(c > d);
// console.log("Name" === "Name");
// console.log(true || false);
// console.log((false && false && false && false && false) || true);
// console.log(false === false);
// console.log(e == "Kevin");
// console.log(a + b == c);
// console.log(a * a == d);
// console.log(48 == "48");

//*********************************************************** */

//D. The farm

// let animal;
// animal = "cow";
// if (animal == "cow") {
//   console.log("mooooo");
// } else {
//   console.log("hey!, you are not a cow");
// }

//************************************************************** */

//E. Driver's Ed

// let Age = 16
// if(Age>=16){
// console.log("here are the Keys!");
// }else {
//     console.log("Sorry, you're too young.");
// }

//************************************************************** */

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
//
//
// for (let i =0; i<=10; i++){

//     console.log(i);
// }

// Write a loop that will print out all the numbers from 10 up to and including 400

// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for (let i = 12; i <= 4000; i+=3) {
//   console.log(i);
// }

// B. Get even
//
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " <-- is an even number");
//   } else {
//     console.log(i);
//   }
// }

// C. Give me Five

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log(i + " High five!, three is crowd ");
//     console.log(" ");
//   } else if (i % 5 == 0) {
//     console.log(i + " High five! ");
//     console.log(" ");
//   } else if (i % 3 == 0) {
//     console.log("found a " + i + " tree is crowd");
//     console.log("  ");
//   } else {
//     console.log(i);
//     console.log("  ");
//   }
// }

//   D. Savings account
// question 1
// let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//   bank_account = bank_account + i;
// }
// console.log("YOUR BANC BALANCE IS " + bank_account);

// question 2

// let bank_account =0;
// for (let i = 1; i <= 100; i++) {
//   (bank_account = bank_account+2*i) ;

// }
//  console.log("YOUR BANK BALANCE IS " + bank_account);

//******************************************************
//  ********************/III. Arrays & Control flow****************

// What are the things in an array called?
// elements
//Do Arrays guarantee those things will be in order?
// no
// What real-life thing could you model with an array?
// my shoping cart, my grades, my list of freinds...

//B. Easy Does It
// let myarray = [
//   "The best of people are those that bring the most benefit to others.prophet Mohamed",
//   " God does not play dice with the universe.Albert Einstein",
//   "Take account of yourselves before you are taken to accountUmar ibn al-Khattab",
// ];

//C. Accessing elements

// question1
// Given the following array const randomThings = [1, 10, "Hello", true]
//How do you access the 1st element in the array?
// To access the 1st element in the array randomThings, i can use the index 0
// like this randomthings [0]

//

// const randomThings = [1, 10, "Hello", true];
// randomThings[2] = "world";

//
// question 3
//heck the value of the array to make sure it updated the array. How? Why, yes! console.log();
// const randomThings = [1, 10, "Hello", true];
// randomThings[2] = "world";
// console.log(randomThings);

// E. Mix It Up

//
// const myArray = [5, 10, 500, 20];

// // question 1

// myArray.push("Aegeon");
// console.log(myArray);
// // question 2
// myArray.shift();
// console.log(myArray);
// // question 3

// myArray.unshift("bob Marley");
// console.log(myArray);
// // question 4
// myArray.pop();
// console.log(myArray);

// // question 5
// myArray.reverse();
// console.log(myArray);
// //  yes i did mutate the array since i have used those methodes like (pop, reverse, shift, unshift...)
// // mutate means that modifie the the array itself it becomes like the aaray has undergone to a mutation.
// // yes .reverse returns the original array but reversed.

//F. Biggie Smalls
// let number_to_compare_to100 = 67;
// if (number_to_compare_to100 < 100) {
//   console.log("little number");
// } else{
//   console.log("big number");
// }

//
//G. Monkey in the Middle
// let number = 7;
// if (number < 5) {
//   console.log("little number");
// } else if (number > 10) {
//   console.log("big number");
// } else {
//   console.log("monkey");
// }

//
//

//H. What's in Your Closet?

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps",
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],
//   [
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs",
//   ],
//   [
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans",
//   ],
// ];

// // 1.What's Kristyn wearing today?

// console.log("Kristyn is rocking that  " + kristynsCloset[2] + " today");
// //

// // 2.

// kristynsCloset.splice(kristynsCloset.length - 1, 0, "raybans");
// console.log(kristynsCloset);
// //
// // 3.

// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);

// //

// // 4.
// console.log(thomsCloset[0][0]);

// // 5.
// console.log(thomsCloset[1][0]);

// // 6.
// console.log(thomsCloset[2][0]);

// 7.
// console.log(
//   "Thom is looking handsome in" +
//     thomsCloset[0][3] +
//     " , " +
//     thomsCloset[1][2] +
//     " , " +
//     thomsCloset[2][0]
// );

// 8.

// thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset);

// **********************   IV. Functions

//A. printGreeting
// function printGreeting(name) {
//   console.log(" Hello there, " + name );
// }

// printGreeting("Slimer")

//B. printCool
//

// function printcool(name) {
//   console.log(name + " is cool ");
// }

// printcool("Leo Messi");

//

//   C. calculateCube

// function calculatecube(side_of_the_cube) {
//   the_cube_volume = side_of_the_cube * side_of_the_cube * side_of_the_cube;
//   console.log(the_cube_volume);
// }

// calculatecube(4);

//  D. isVowel
// function isVowel(vowel) {
//   if (
//     vowel == "a" ||
//     vowel == "e" ||
//     vowel == "i" ||
//     vowel == "o" ||
//     vowel == "u" ||
//     vowel == "y"
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isVowel("e"));

//   E. getTwoLengths

// function nameindex(name1, name2) {
//   return [name1.length, name2.length];
// }
// console.log(nameindex("sidi", "abdarrahaman"));

/////////F. getMultipleLengths

// function wold_convertor(word) {
//   const array_of_numbers = [];
//   for (let i = 0; i < word.length; i++) {
//     array_of_numbers.push(word[i].length);
//   }
//   return array_of_numbers;
// }

// console.log(
//   wold_convertor(["abdou", "sidi", "abdarrahman", "limame", "dah_bady"])
// );

//
// function maxOfThree(numbre1, numbre2, numbre3) {
//   let largest = numbre1;

//   if (numbre2 > largest) {
//     largest = numbre2;
//   }
//   if (numbre3 > largest) {
//     largest = numbre3;
//   }

//   return largest;
// }

// console.log(maxOfThree(70, 42, 19));
// console.log(maxOfThree(70, 70, 70));
// console.log(maxOfThree(42, 42, 70));
// console.log(maxOfThree(21, 17, 17));

///////////////////H. printLongestWord

// function printLongestWord(words) {
//   let longestWord = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   console.log("the longest name in this list is ");
//   return longestWord;
// }

// console.log(
//   printLongestWord(["abdou", "keboud", "beyadefffffffffffff", "bradafromadamada"])
// );

//

//
// ////////////////////////////OBJECTS
// /////////A. Make a user object
// const user = {
//   name: "abdou",
//   email: "abdouuuuuu@Gmail.com",
//   age: 30,
//   purchased: [],
// };
// /////////////////////////////////////

// ///////////////////////////////////////////

// //////////B. Update the user
// //1
// user.email = "aasdfsds@gmail.com";

// //2.
// user.age++;

// ////////////  D. Shopaholic!
// // 1.
// user.purchased.push("carbohydrates");

// // 2.
// user.purchased.push("peace of mind");
// //  3.
// user.purchased.push("Merino jodhpurs");
// //   4.
// console.log(user.purchased[2]);

// ////////////////E. Object-within-object

// //// 1.
// user.friend = {
//   name: "alxis",
//   age: 30,
//   location: "31 alistreet,Fl,USA",
//   purchase: [],
// };
// //// 2.

// console.log(user.friend.name);

// /// 3.
// console.log(user.friend.location);

// // 4.
// user.friend.age = 55;
// /// 5.
// user.friend.purchase.push("The One Ring");

// // 6.
// user.friend.purchase.push("A latte");
// console.log(user.friend.purchase[1]);

// ////////////////////F. Loops

// // 1.

// for (i = 0; i <= user.purchased.length; i++) {
//   console.log(user.purchased[i]);
// }

// // 2.

// for (i = 0; i <= user.friend.purchase.length; i++) {
//   console.log(user.friend.purchase[i]);
// }

// /////////// G. Functions can operate on objects

// // 1. .2 .3

// function updateUser() {
//   user.age++;
//   user.name = user.name.toUpperCase();
// }
// updateUser(user);
// console.log(user);
// ///// 2
// function oldAndLoud(person) {
//   person.age++;
//   person.name = person.name.toUpperCase();
// }
// oldAndLoud(user);
// console.log(user);

