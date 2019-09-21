// DOM 

function changeBackgroundImage () {
    let header = document.querySelector('.header');
    header.style.backgroundImage = "url('../IMAGES/minions2.jpg')";
    header.style.transition = '10s all';
    document.querySelector('.heading-primary-main').style.letterSpacing = '4rem';
    document.querySelector('.heading-primary-main').style.transition = '0.9s';
    document.querySelector('.heading-primary-sub').style.letterSpacing = '1.3rem';
    document.querySelector('.heading-primary-sub').style.transition = '0.9s';
}

document.querySelector('.header').addEventListener('mouseover', changeBackgroundImage);
//











// Practise JavaScript

console.log('Ussher is really cool.');

let a = 'My name is Ussher.';
a += ' Whatchoo lookin\' at?'
console.log(a);

string = "Hello World";

arr = ['ryu', 'shi-fu'];
arr[0] = 'kojo';
console.log(arr);

function sentence(noun, pronoun) {
    result = `Don't be silly Ron. Your stupid ${noun} is a herbivore, isn't ${pronoun}?`
    return result;
}

console.log(sentence('Scavus', 'it'));

array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

year = new Array(1990, 1999, 1969, 1948); // Arrays are zero-based objects: first elements are always at position zero.

console.log(array[1][0]);

array.push('Ussher'); // append 'Ussher'.
console.log(array);

array.pop();
console.log(array); // kick out 'Ussher'.

array.shift();
console.log(array); // shift will remove the first element from your left.

array.unshift('Kingsley'); // unshift will append an element at the first position in the array.
console.log(array);


let header = document.querySelector('.header').innerHTML;
console.log(header);

// Coding Challenge -- Who won the game ?

let johnScores = [89, 120, 103];

let mikeScores = [152, 94, 123];

let maryScores = [97, 134, 105];

let x = 0;
let y = 0;
let z = 0;

for (i = 0; i < 3; i++) {
    x += johnScores[i];
    y += mikeScores[i];
    z += maryScores[i];
}

let johnAverage = x / 3;
let mikeAverage = y / 3;
let maryAverage = z / 3;

console.log(`John: ${johnAverage}`, `Mike: ${mikeAverage}`, `Mary: ${maryAverage}`);


switch (true) {

    case johnAverage > mikeAverage && johnAverage > maryAverage:
        console.log(`John wins with ${johnAverage} points`);
        break;

    case maryAverage > johnAverage && maryAverage > mikeAverage:
        console.log(`Mary wins with ${maryAverage} points`);
        break;

    case mikeAverage > maryAverage && mikeAverage > johnAverage:
        console.log(`Mike wins with ${mikeAverage} points`);
        break;

    default:
        console.log('There was a draw');
}

let ussher = {
    fullName: 'Ussher Kingsley',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
        }

        // Add results to the corresponding arrays

        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;
        console.log(this.tips)
    }
}


function calcAverage(tips) {
    var sum = 0;

    for (i = 0; i < tips.length; i++) {
        sum += tips[i];
    }

    return sum / tips.length;
}

console.log(ussher);

/* Function Statements and Expressions */
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a taxi in London'
        case 'designer':
            return firstName + ' designs clothers.'
        default:
            return firstName + ' does something else';

    }
}

console.log(whatDoYouDo('teacher', 'John'));

// CODING CHALLENGE - 2

// John and his family went on a holiday and went to 3 different
// restaurants. The bills were $124, $48 and $268.
// To tip the waiter a fair amount John created a simple tip
// calculator (as a function). He likes to tip 20% of the bill
// when the bill is less than $50, 15% when the bill is between $50 and $200, 
// and 10% if the bill is more than $200.

// In the end, John would like to have 2 arrays:
// (1) Containing all three tips (one for each bill).
// (2) Containing all three final paid amounts (bill + tip).


// (NOTE: To calculate 20% of a value, simply multiply if with 20/ 100 = 0.2)

// Solution

let restaurantCost = [124, 48, 268];

/*

function tipCalculator(costs) {
    let allTips = new Array();
    let allAmounts = new Array();

    for (let i = 0; i <= costs.length; i++) {
        if (costs[i] < 50) {
            let tip = 0.2 * costs[i];
            allTips.push(tip);
            allAmounts.push(tip + costs[i]);

        } else if (costs[i] > 50 && costs[i] < 200) {
            let tip = 0.15 * costs[i];
            allTips.push(tip);
            allAmounts.push(tip + costs[i]);

        } else if (costs[i] > 200) {
            let tip = 0.1 * costs[i];
            allTips.push(tip);
            allAmounts.push(tip + costs[i]);
        }
    }

    console.log(allTips, allAmounts);
}

*/

function tipCalculator(costs) {
    let allTips = new Array();
    let allAmounts = new Array();
    tip = null;

    for (let i = 0; i <= costs.length; i++) {

        switch (true) {
            case costs[i] < 50:
                tip = 0.2 * costs[i];
                allTips.push(tip);
                allAmounts.push(tip + costs[i]);
                break;

            case costs[i] > 50 && costs[i] < 200:
                tip = 0.15 * costs[i];
                allTips.push(tip);
                allAmounts.push(tip + costs[i]);
                break;

            case costs[i] > 200:
                tip = 0.1 * costs[i];
                allTips.push(tip);
                allAmounts.push(tip + costs[i]);
                break;

            default:
                break;
        }
    }

    console.log(allTips, allAmounts);
}

tipCalculator(restaurantCost);



// Object literals -- "new Object ()" Syntax

var Jane = new Object();
Jane.name = 'Jane McDonald';
Jane.birthYear = 1995;

console.log(Jane);

var John = {
    firstName: 'John',
    lastName: 'Watson',
    birthYear: 1992,
    family: ['Dave', 'Hera', 'Mikaela'],
    job: 'dentist',
    isMarried: false,

    calcAge: function () {
        this.age = 2018 - this.birthYear;
        return this.age;
    }
};


console.log(John);
console.log(John.firstName);
console.log(John['lastName']);
var k = 'birthYear';

console.log(John[k]);
John.job = 'florist'
console.log(John);

console.log(John.calcAge()); // A typical method


// Coding Challenge - 3 
// Let's now implement the same functionality with objects and methods. 
// 1. For each of them, create an object wit properties for their fullName, mass,
// and  height
// 2. Then add a method to each object to calculate the BMI. Save the BMI to the object and also return
// it from the method.
// 3. In te end, log to the console who has the highest BMI, together with the full name and the
// respective BMI, together with the full name and the respective BMI. Don't forget they might have the
// same BMI.

// Remember: BMI = mass / height ** 2. NB mass in kilograms and height in meters).

let Reginald = {
    fullName: 'Reginald Claw',
    mass: 56,
    height: 1.23,

    BMI: function () {
        return this.mass / (this.height) ** 2;
    }
}

let Dudley = {
    fullName: 'Dudley Bell',
    mass: 79,
    height: 2.13,

    BMI: function () {
        return this.mass / (this.height) ** 2;
    }

}

console.log(Reginald.BMI());
console.log(Dudley.BMI());

// Compare the BMI to know which is the greatest
function compareBMI(a, b) {

    switch (true) {
        case a.BMI() > b.BMI():
            console.log(`${a.fullName} has the highest BMI of ${a.BMI()}`);
            break;

        case a.BMI() < b.BMI():
            console.log(`${b.fullName} has the highest BMI of ${b.BMI()}`);
            break;

        default:
            console.log('Both BMIs are equal.')
    }

}

compareBMI(Reginald, Dudley);




// Coding Challenge 4

/* 

John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42. 
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between  $50 and $200, and 
10%  if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values.
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid the bill and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid
amounts (bill + tip). HINT: Start with two empty arrays[] as properties and then fill them in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were
$77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10%. when the bill is between $100 and $300 (different than John), and 
25%  for any amount below $100.
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: loop over the array, and in each iteration store the current  sum in a variable (starting from zero). 
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average).

7. Calculate the average tip for each family.
8. Log to the console which family paid the highest tips on average.

*/


//  Solution 


var MarkFamily = {
    restaurantCosts: [77, 475, 110, 45],

    costs: function () {

        var eachTip = [];
        var everyAmount = [];

        for (i = 0; i < this.restaurantCosts[i]; i++) {

            var percentage;
            var a = this.restaurantCosts[i];


            switch (true) {
                case a < 100:
                    percentage = .2;
                    break;

                case a >= 100 && a < 300:
                    percentage = .1;
                    break;

                default:
                    percentage = .25;
            }

            eachTip[i] = a * percentage;
            everyAmount[i] = eachTip[i] + a;
        }
        return eachTip;
    }
}

console.log(MarkFamily.costs());

var JohnFamily = {
    cafebills: [124, 48, 268, 180, 42],

    johnCosts: function () {
        this.cafeTip = [];
        this.cafeAmount = [];

        for (var k = 0; k < this.cafebills.length; k++) {

            var realCost = this.cafebills[k];

            switch (true) {
                case realCost < 50:
                    var fractions = 0.2;
                    break;

                case realCost >= 50 && realCost <= 200:
                    fractions = 0.15;
                    break;

                default:
                    break;
            }

            this.cafeTip[k] = fractions * realCost;
            this.cafeAmount[k] = this.cafeTip[k] + realCost;
        }

        return this.cafeTip;
    }
}

console.log(JohnFamily.johnCosts());


function compareAverageTip(tip_array1, tip_array2) {

    let bigArray = [tip_array1, tip_array2]
    let box = [];

    for (var k = 0; k < bigArray.length; k++) {
        let totalSum = 0;

        for (var t = 0; t < bigArray[k].length; t++) {
            totalSum = totalSum + bigArray[k][t];
        }

        let average = totalSum / bigArray[k].length;
        box.push(average);
    }


    for (var l = 0; l < box.length; l++) {

        switch(true) {
            case box[0] > box[1]:
                return `John\'s family has the highest tipping percentage with $${box[0]}`;

            case box[0] < box[1]:
                return `Mike\'s family has the highest tipping percentage with $${box[1]}.`;

            default:
                return `Both families has equal tipping percentage.`;
        }
    }
}

console.log(compareAverageTip(JohnFamily.johnCosts(), MarkFamily.costs()));



/* ES6
JavaScript runs in web browsers. When we write a code, JavaScript is attached to
an abstract syntax tree, then is converted to machine code--a bizarre language the
the computer comprehends-- for execution by the CPU. */

/* Every Code we JavaScript we write live in an environment called the Execution Global Context.
It is the pool of our function and variables we create in our editors. And here is where a
concept of SCOPE is relevant. In the Execution Global Context(EGC), there is a hierarchy of belonging of
objects. Check the example below:

var name = 'John' ---> name is a global variable if it doesn't belong to any function
                       hence it belongs to the the EGC which is interchangeable with the window
                       name ====  window.name; This means the variable can be accessed from anywhere: from
                       your function, list, array, etc.

function first() {  ---> first() is a global function and a container for some other variables: a and x
                    hence it values are bounded to their parent, first(), which, likewise, is a  child of the EGC.
    var a = 'Hello';
    second();
    var x = a + name; ----> x being local variable means its usage is within the first() function only.
                            Any attempt to call or manipulate x outside of the walls of first(),otherwise, raises an error.
}

function second() {
    var b = 'Hi';
    third();
    var z = b +name;  ---> z works only within the scope of only and only second(). Check the function third() below.
}

function third() {
    var c = 'Hey!';
    var z = c + name;  ---> there is another z variable which  seems confusing at first but totally reasonable.
                       ---> z in third() is  different thing from second()'s variable z. When two variables of the same name are 
                       created in different functions, they never conflict with each other, because anytime a function is created, a dictionary
                       is created automatically to to store data objects created within the function. 
                       Assume: second()_dict = {a: 'Hello', x: a + name, second():...}, third()_dict = {c: 'Hey', z: c + name};
                       
}

first();

*/

// Function expressions

var retirement = function(year) {
    console.group(65 - (2016 - year));
}

calculateAge(1985);  

function calculateAge(year) {
    console.log(2019 - year);
}

// Borrowing of methods
var alice = {
    name: 'Alice',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2010 - this.yearOfBirth);
        
        /*

        function innerFunction() {
            console.log(this)  // this representes the Execution Global Context not the 'alice' object.
        }

        innerFunction(); 
        
        */
    }
}

alice.calculateAge();

var susan = {
    name : 'Susan',
    yearOfBirth: 1995,
};

susan.calculateAge = alice.calculateAge;
console.log(susan);
susan.calculateAge();


// DOM - Document Object Model


function Person (name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.howOld = function () {
        return 2019 - this.yearOfBirth;
    }

    Person.prototype.allInfo = function () {
        return `${this.name} was born in ${this.yearOfBirth}.`
    }
}

const kojo = new Person('Ussher Kingsley', 1999);
const lex = new Person('Lex Luthor', 1963);

console.log(kojo.howOld());
console.log(lex.howOld());
console.log(lex.allInfo());

// DOM Manipulation -- Document Object Model

console.log(Math.random);

// Function Constructors
let Student = function (name, school, age, favoriteColor) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.favoriteColor = favoriteColor;

    Student.prototype.yearOfBirth = function () {
        return 2019 - age;
    }

    Student.prototype.getName = function () {
        return name; 
    }
}

/*
function Student (name, school, age, favoriteColor) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.favoriteColor = favoriteColor;

    Student.prototype.getName = function () {
        return this.name;
    }

    Student.prototype.yearOfBirth = function () {
        return 2019 - this.age;
    }
}

let sowee = new Student('Jon Sowee', 'Arkansas High School', 29, 'teal');
let lina = new Student('Lina Sanders', 'Laney High School', 23, 'crimson');

console.log(sowee.getName());
console.log(sowee.yearOfBirth());
*/

// Object create

// Create an object literal that will hold the prototype function or object's method
let personProto = {
    calculateDeathAge: function () {
        console.log(2019 - this.yearOfDeath);
    }
}

/* let jason = Object.create(personProto); 
jason.name = 'Jason holiday';
jason.age = 23;
jason.profession = 'freelance writer'; */

let jason = Object.create (
    {
        name: { value: 'Jason Holiday'},
        age: { value: 35},
        profession: { value: 'operative'},
        calcSalary: function () {
            // Do Something here
        }
    },

    {
        alias: { value: 'Dancer'},
        yearsOfExperience: { value: 2},
        maritalStatus:  { value: 'married'},
        calcYearsOfMarriage: function () {
            // Do something here
        }
    }
)

let asher = {
    name: 'Asher Sutton',
    age: 55,
    profession: 'librarian',
    calcSalary: function () {
        // Do something
    }
};

// Primitives vs Objects

let object1 = {
    name: 'Rex',
    age: 20,
};

let object2 = object1;

// Passing Functions as arguments

/*
let years = [1990, 196, 1937, 2005, 1998];

function calcArrayOfAges (array, func) {
    let arrayOutput = [];
    for (let i = 0; i < array.length; i++) {
        arrayOutput.push(func(array[i]));
    }
    console.log(arrayOutput);
}

function calculateAge (yearOfBirth) {
    return 2019 - yearOfBirth;
}

function at18 (yearOfBirth) {
    return yearOfBirth >= 18; 
}

function maxHeartRate (yearOfBirth) {
    if (18 <= yearOfBirth <= 81) {
        return Math.round(206.9 - (0.67 * yearOfBirth));
    } else {
        return -1;
    }
}

calcArrayOfAges(years, calculateAge);
calcArrayOfAges(years, at18);
calcArrayOfAges(years, maxHeartRate);
*/

// Functions returning functions

function interviewQuestions (job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UI design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
             console.log('What subject do you teach', name, '?');
        }
    }  else {
        return function (name) {
            console.log('So ' + name + ', what do you do?');
        }
    }
}

let teacherQuestion = interviewQuestions('teacher');
teacherQuestion('John');
interviewQuestions('designer')('Florence');

// Immediately Invoked Functions

(
    function (a) {
    let score = Math.round(Math.random() * 10);
    console.log(a >= 5, score);
}
) ();

// Closures

function retirementChecker (retirementAge) {
    let a = ' years left until retirement.'
    return function (yearOfBirth) {
        let age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
// US retirement age is 66years
retirementChecker(66)(1999);
retirementChecker(65)(1993);
retirementChecker(67)(1997);

function interviewQuestionnaire (job) {
    return function (name) {
        let a = name + ', can you please explain what UI design is?';
        let b = name + ' ,what subject do you teach?';
        let c = 'So ' + name + ', what do you do?';
        if (job === 'designer') {
            console.log(a);
        } else if (job === 'teacher') { 
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
interviewQuestionnaire('fisherman')('Jonah');

// BIND, CALL & APPLY methods

let jay = {
    name: 'Jay T',
    age: 20,
    job: 'chemist',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log(`Good ${timeOfDay}, Ladies and Gentlemen. My name is ${this.name}, and I'm ${this.age}.  I'm a ${this.job} by profession.`);
        } else if (style === 'friendly') {
            console.log(`'Hey! What's up? Call me ${this.name}, and I'm ${this.age}. I'm a ${this.job} by profession. Have a nice ${timeOfDay}.`);
        }
    }
}

let emily = {
    name: 'Emily',
    age: 35, 
    job: 'freelance designer'
};

jay.presentation('formal', 'morning');

/*
This call() method is also known as method-borrowing || refer to line 525
*/
jay.presentation.call(emily, 'friendly', 'midday');

/*
The apply() 'method' won't work in this case: it is only compatible with methods 
whose arguments are arrays.
*/
jay.presentation.apply(emily, ['friendly', 'afternoon']);

/* 
The bind() allows one to allocate a parameter of the object's function, which can be
stored in a variable for reuse or re-application for a different purpose.
*/
let jayFriendly = jay.presentation.bind(jay, 'friendly');
jayFriendly('morning');
jayFriendly('evening');

/* This application of bind(), I call "masquerading"; */
let emilyFormal = jay.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



let years = [1990, 196, 1937, 2005, 1998];

function calcArrayOfAges (arr, func) {
    let arrayOutput = [];
    for (let i = 0; i < arr.length; i++) {
        arrayOutput.push(func(arr[i]));
    }
    return arrayOutput;
}

function calculateAge (yearOfBirth) {
    return 2019 - yearOfBirth;
}

function maxHeartRate (yearOfBirth) {
    if (18 <= yearOfBirth <= 81) {
        return Math.round(206.9 - (0.67 * yearOfBirth));
    } else {
        return -1;
    }
}
function ageLimit (limit, yearOfBirth) {
    return yearOfBirth >= limit; 
}

// returns an array of ages based on an array of year of births
let ages = calcArrayOfAges(years, calculateAge); 

let fullJapan = calcArrayOfAges(ages, ageLimit.bind(this, 20));
console.log(fullJapan, ages);



// CODING CHALLENGE
/*

1. Build a function constructor called Question to describe a question. A question
should include:
a) question itself
b) the answers from which the player can choose the correct one '
(choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create  a couple of questions using the constructor

3. Store them in an array

4. Select one random question and log it on the console, together with the possible 
answers (each question should have a number).

5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as yu displayed it on 
Task 4.

6. check if the answer is correct and print to the console whether the answer 
is correct or not.

7. Suppose this code would be a  plugin fo other  programmers to use in their code.
So make sure that all your code is private and doesn't interfere wih the other 
programmers code.

DIFFICULTY LEVEL
8. After you display the result, display the next random question, so that the game 
never ends (Hint: Write a function for this and call it right after displaying the result)

9. Be Careful after Task 8, the game literally never ends. So include the option to quit
the game if the score (Hint: Use the power of closures: this ain't mandatory).

10. Display the score in the console. Use yet another for this.

*/


////////////////////////////////////////////////////////////////
//////////////////////////////Solution

// (function () {
//     function Question (question, choices, correctAnswer) {
//         this.question = question,
//         this.choices = choices,
//         this.correctAnswer = correctAnswer,

//         Question.prototype.questionAndChoices = function () {
//             // Display question    
//             console.log(this.question);
//             for (let i = 0; i < this.choices.length; i++) {
//                 console.log(this.choices[i]);
//             }
//         }

//         Question.prototype.checkScore = function () {
//             // Do stuff
//         }
//     }

//     // Create instances from Question
//     q1 = new Question (
//         'Who is Rex?',
//         [ '0: A Good Guy', '1: A Bad Guy', '2: Don\'t Know' ], 1
//     )

//     q2 = new Question (
//         'What is the largest fish ?',
//         [ '0: Tiger Shark', '1: Hermit Crab', '2: Blue Whale'], 2
//     )

//     q3 = new Question (
//         'Which country is also called Mesopotamia?',
//         ['0: Kyrgyzstan', '1: Iceland', '2: Iran'], 2
//     )
//     // Store questions in an array
//     let arrayQ = [q1, q2, q3];
    
//     // Log random question with choices and check choices & log judgement: if answer is correct or not
//     function promptCheck () {
//         a = arrayQ [Math.round(Math.random() * 2)];
//         b = a.questionAndChoices();
//         promptAnswer = prompt('Enter the number of the choices below');
        
//         if (promptAnswer !== 'exit') {
//             if (promptAnswer == a.correctAnswer) {
//                 console.log('CORRECT ANSWER!');
//                 console.log(scorebox());
//                 promptCheck();

//             } else if (promptAnswer !== a.correctAnswer) {
//                 console.log('INCORRECT ANSWER!');
//                 promptCheck();
//             }
//         } else {

//         }
//     } 
//     promptCheck();
// }) ();

/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// Solution




   

























