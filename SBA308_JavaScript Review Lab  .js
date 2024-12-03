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

let bank_account =0;
for (let i = 1; i <= 100; i++) {
  (bank_account = bank_account+2*i) ;
 

}
 console.log("YOUR BANK BALANCE IS " + bank_account);
