let myAge = 27; //at the moment i'm 27 (user)

let earlyYears = 2; //The first two years of a dog’s life

earlyYears *= 10.5; //The first two years of a dog’s life count as 10.5 dog years each.
let laterYears = myAge - 2; //subtract 2 from myAge variable = laterYears = 25

laterYears *= 4; //Multiply the laterYears variable by 4 to calculate the number of dog years accounted for later years.

//console.log(laterYears); //100
//console.log(earlyYears); //21

let myAgeInDogYears = earlyYears + laterYears;
//console.log(myAgeInDogYears); //121

const myName = 'Maria'.toLowerCase(); //name as a string, its built-in method .toLowerCase() and  stored the result in a variable called myName.
//console.log(myName); //maria

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
//My name is maria. I am 27 years old in human years which is 121 years old in dog years.
