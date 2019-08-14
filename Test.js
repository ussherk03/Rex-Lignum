
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

years = new Array(1990, 1999, 1969, 1948); // Arrays are zero-based objects: first elements are always at position zero.

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

/*
if (johnAverage === mikeAverage) {
    console.log('There was a tie');
} else if (johnAverage > mikeAverage) {
    console.log('John won the game');
} else {
    console.log('Mike won the game');
}
*/


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

// function tipCalculator(costs) {
//     let allTips = new Array();
//     let allAmounts = new Array();

//     for (let i = 0; i <= costs.length; i++) {
//         if (costs[i] < 50) {
//             let tip = 0.2 * costs[i];
//             allTips.push(tip);
//             allAmounts.push(tip + costs[i]);

//         } else if (costs[i] > 50 && costs[i] < 200) {
//             let tip = 0.15 * costs[i];
//             allTips.push(tip);
//             allAmounts.push(tip + costs[i]);

//         } else if (costs[i] > 200) {
//             let tip = 0.1 * costs[i];
//             allTips.push(tip);
//             allAmounts.push(tip + costs[i]);
//         }
//     }

//     console.log(allTips, allAmounts);
// }

function tipCalculator (costs) {
    let allTips = new Array ();
    let allAmounts = new Array ();
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
                console.log('Welcome');
                break;
        }
    }

    console.log(allTips, allAmounts);
}


tipCalculator(restaurantCost);


// Object literals


// "new Object ()" Syntax
var Jane = new Object ();
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

let  Reginald = {
    fullName : 'Reginald Claw',
    mass : 56,
    height : 1.23,

    BMI : function () {
        return this.mass / (this.height) ** 2;
    }
}

let Dudley = {
    fullName : 'Dudley Bell',
    mass : 79,
    height: 2.13,

    BMI : function () {
        return this.mass / (this.height) ** 2;
    }

}

console.log(Reginald.BMI());
console.log(Dudley.BMI());

// Compare the BMI to know which is the greatest
function compareBMI (a, b) {

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


// Loops and Iteration





