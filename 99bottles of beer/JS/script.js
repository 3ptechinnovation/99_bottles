//ARRAY - Basic to Intermediate

//An array is a collection of elements of similar data.

// //Sample1

// let guestList = ["bimbo", "Rude", "Atinuke", "david", "simbi"];

// alert (guestList[3]);


// //Sample2

// let guestList = ["bimbo", "Rude", "Atinuke", "david", "simbi"];

// alert (guestList.includes("Rude"));


//Sample3

// let guestList = ["bimbo", "Rude", "Atinuke", "david", "simbi"];

// alert (guestList.length);


//Write some code that creates a prompt to ask a Guest what
// their name is, which they will then type into the prompt.
//Then you will check the name againsts all the names inside
// of our guestlist and if it does exit, then we will send
// them an alert saying "welcome", orderwise it will say "Your
// name is not part of the guest list"




// let guestName = prompt("What is your name");

// let guestList = ["Femi", "Bimbo", "Shola", "Kemi", "Bisi",
// "dayo", "Nike", "Emem", "Itoro"]

// if (guestList.includes(guestName)) {

//     alert ("Welcome to CFBC, " + guestName + " your name is in the list")
// }
// else {

//     alert (guestName + " ,Your name is not part of the guest list")
// }


//Who is Buying Food Today.

//Write a function that will select a random name from the list of names.
// The person selected will have to pay for everyone's food.
//  few other names (, "Nike", "Emem", "Itoro")



// let nameList = ["Femi", "Bimbo", "Shola", "Kemi", "Bisi",
// "dayo"];

// let nameSelection = Math.floor(Math.random()*10);


// if (RanPerson = nameList[nameSelection]) {

//     console.log(nameSelection);

// alert (RanPerson + " is buying Lunch today.");

// }

// else {
//     alert (nameSelection + " is not inclusive");
// }



// Correction using functions

// function whoisBuying(names) {
//     let numberOfPersons =names.length;
//     let selectedPerson = Math.floor(Math.random() * numberOfPersons);

//     let RandPerson = names[selectedPerson];

//     return RandPerson + " is going to buy us lunch today."
// }

// let totalNames = ["Femi", "Bimbo", "Shola", "Kemi", "Bisi", "dayo"];

// console.log(whoisBuying(totalNames));




// Part 12


// Lyrics to the bottles of beer

// 99 bottles of beer on the wall, 99 bottles of beer
// Take one down and pass it on, 98 bottles of beer

// a program that inputs numbers in descending order by 1



// let n = 100;



// while (n > 0){

//     n = n - 1;

//     document.write(n + "bottles of beer on the wall", n + " bottles of beer .Take one down and pass it on,"
//     + (n-1) + "bottles of beer <br/>");

// }

// OR

let n = 100;



while (n > 0){

    n--;

    document.write(n + "bottles of beer on the wall", n + " bottles of beer .Take one down and pass it on,"
    + (n-1) + "bottles of beer <br/>");

}

// CORRECTION
















