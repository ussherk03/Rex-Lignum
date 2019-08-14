// Intro to strings

console.log('Hello World, JS is cool!');

let me = 'Ussher Kingsley';
let card = ' a Spade or Heart.';

let match = me + ' has either' + card;
console.log(match);

// or
 
let altMatch =`${me} has either${card}`
console.log(altMatch);

// Length of string
let string = 'Perseus is cool.'
console.log(string.length);

// Calling the sub-element of a string by index
console.log(string[1], me[0]);


// String methods
console.log(string.toUpperCase());

let lower = string.toLowerCase();
console.log(lower, string);

let index = string.indexOf('Perseus');
console.log(index);

// Common string methods;

let email = 'mario@thenetninja.co.uk';

let lastIndex = email.lastIndexOf('n');

let slice = email.slice(0, 6);
console.log(slice);


let substring = email.substr(4, 10); 
// The above means slice 10 elements after the element with index 4, including the starting element itselfr and store in substring

let substitute = email.replace('m', 'u');
console.log(substitute);

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %;

let output = radius % 3;

let likes = 10;

// likes--;
// likes++;
// likes += 10;
// likes*=20;


// NaN - not a number
// console.log(5 / 'hello');
// console.log(5 * 'hello');

let numOfLikes = 'the blog  has ' + likes + ' likes';
console.log(numOfLikes);

//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const thumbsUp = 30;

// concatenation way 
let stringWay = 'The blog called ' + title + ' by ' + author + ' has ' + thumbsUp + ' likes';
console.log(stringWay);

// template string way 
let templateWay = `The blog called ${title} by ${author} has ${thumbsUp} likes`;


// creating html templates

let html = `
   <h2>${title}</h2>
   <p>By ${author}</p>
   <span>This blog has ${likes} likes</span>
`;

let ninjas = ['shaun', 'ryu', 'chun-li'];

ninjas[1] = 'Ussher';

//console.log(ninjas[0]);
//console.log(ninjas[1]);

let multipleOfFive = [20, 25, 30, 35];
console.log(multipleOfFive[2])


let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

let join = ninjas.join('-');

let indexOfninja = ninjas.indexOf('chun-li');

let concat = ninjas.concat(['ken', 'crystal', 'Billie']);

let push = ninjas.push('ken');

let pop = ninjas.pop();

let multiple = null;

console.log(multiple, multiple + 3, `the multiples of 5 ${multiple}`);


// Boolean expressions

console.log(true, false, "true", "false");

//methods can return booleans
let mail = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let getBoolean0 = mail.includes('@');
let getBoolean1 = names.includes('luigi');

console.log(getBoolean0); 
console.log('*****');

// Comparisons operators

let age = 25;

console.log(age == 25);
console.log(age == '25'); 
console.log(age != 30); 
console.log(age > 20); 
console.log(age < 20); 
console.log(age >= '25'); 

console.log('****');
let name = 'shaun';

console.log(name == 'shaun');  
console.log(name == 'Shaun'); 
console.log(name == 'crystal'); 
console.log(name > 'Shaun'); 
console.log(name > 'Crystal'); 

console.log('*****');

// Loose comparison (different types can still be equal)
console.log(age == 25);
console.log(age == '25');
console.log(age != 25);;
console.log(age != '25');

console.log('******');

// strict comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

// Type Conversion
let score = '100';
score = Number(score);
console.log(score + 1); 

let out = Boolean('');

let convertedToString = String(50);
console.log(convertedToString, typeof(convertedToString));

              
// For Loops 

for (let i = 0; i < 5; i++) {
	console.log('in loop:', i);
}

console.log('Done with loop!');

const list = ['shaun', 'mario', 'luigi'];

for(let c = 0; c < list.length; c++){
	// console.log(list[i]);

	let html = `<div>${list[c]}</div>` 
	// the above is to demonstrate the application of...
	// ...for loops in template strings.
	console.log(html);
}
// For-loop shorthand
list.forEach((name) => console.log(name));     // Arrow function

// While Loops
let i = 0;

// while(i < 5){
// 	console.log(i);
// 	i++;

//NB: This kind of loop can crash your browser.

// if statements
const a = 20;
if(a >= 20){
   console.log('You are over twenty.')
}

const ninjes = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjes.length > 3){
    console.log("that's  a lotta ninjas.");
}

const password = 'password';
// In if-statements, && and || stands for 'and'/ 'or' respectively.

if(password.length >= 12 && password.includes('@')){
	console.log('that password is dead strong.');
} 
else if(password.length >= 8 || password.includes('@') && password.length > 5){
	console.log('that password is strong enough');
} 
else {
	console.log('password is not long enough');
}

// logical NOT (!)
let user = false;

if (!user) // ! reverses the boolean value. So if it FALSE, it becomes TRUE and vice-versa.
{
   console.log('You are TRUE now.')
}

console.log(!true);
console.log(!false);


// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++){

	if(scores[i] === 0) {
		continue;
	}  // this if-statement allows the console to skip '0' and continue loop.
	   // It is an embarassing score, isn't it ?

	console.log('Your score: ', scores[i]);

	if(scores[i] === 100){
		console.log('You got the top score!');
		break;//Prints the message in the console when we arrive right at 100
		      // and stops there with the help of (break;)
	}
}

// Switch statements -- Another variant of if-statements
const grade = 'B';

switch(grade) {

    case 50:
      console.log('You got an A!');
      break;

    case 'B':
      console.log('You got a B!');
      break;

    case 'C':
      console.log('You got a C!');
      break;

    case 'D':
      console.log('You got a D!');
      break;

    case 'E':
      console.log('You got an E!');
      break;

    case 'F':
       console.log('You got an F!');
       break;

    default:
        console.log('not a valid grade');
}

// variables, code block, and scopes (local and global)
let b = 30;
let id = 'rex';

console.log(b, id);

if(true)
{
	let b = 23;
	let id = 'Rex';

   console.log(b, id);

   var test = 'hello rex'
   //Unlike 'let' and 'const' variables, 'var' variables can be available outside of their scope.
}

console.log(test);


const s = 'Hello World';

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);

// I do not like apples, but cherries

fruits[0] = 'cherries';
console.log(fruits);


fruits.push('mango');
console.log(fruits)

fruits.pop();
console.log(fruits);


fruits.unshift('pineapples');
console.log(fruits);



//Object literals

const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '50 main st',
		city: 'Boston',
		state: 'VI',
	}
}

console.log(person.hobbies[1]);
//Get the first element at position 1 (hobbies[1]) of hobbies.

console.log(person.address.city);
//Get the variable city. Or you see it like a path: person > address > city.

console.log(person.age);
//Try this!

person.email = 'johndoe@email.com';
console.log(person);



// Arrays of Objects 
// An Array is a container that holds a collection of a collection of common items
// or uncommon items, or more uncommonly, both.

const todos = [
	{
		id: 1,
		text: 'Take out trash',
		isCompleted: true,
	},

	{
		id: 2,
		text: 'Meeting with boss', 
		isCompleted: true,
	},

	{
		id: 3,
		text: 'Dentist appt',
		isCompleted: false,
	}
];

const todoJSON = JSON.stringify(todos); 
// Converts the above to a JSON format, or suitable presentation of data for processing by the web engine.

console.log(todoJSON);

//JSON FORMAT -- What you see below is how the output should be like.
/* [
     {"id":1,"text":"Take out trash", "isCompleted":true},
     {"id":2,"text":"Meeting with boss","isCompleted":true},
     {"id":3,"text":"Dentist appt.","isCompleted":false}
    ]
*/

//forEach, map, filter

// const todoCompleted = todos.filter(function(todo) {
// 	return todo.isCompleted == true;
// });

// console.log(todoCompleted);



// Evaluating  conditions
// Switch-Case Method is also a neat way to handle conditions:

const x = 11 ;  //This constant(for now) will determine the two major cases: red and blue.
// const color = () => {
// 	if (x > 11) {
// 		console.log('This is red');
// 	} else if (x < 11) {
// 		console.log('This is teal');
// 	} else {
// 		console.log('This is blue');
// 	}
// };

const color = x > 10 ? 'red' : 'blue'; 
//This is a condition. [?] stands for 'then'.
// [:] represents 'else'.

switch (color) {
	case 'red':
		console.log('color is red');
		break;

	case 'blue':
	    console.log('color is blue');
	    break;

	default:
	    console.log('color is NOT  red or blue.');
	    break;
}

const z = 80;

const val = z > 10 ? 'greater than 10' : 'less than 10';
 
switch (val) {
	case 'greater than 10':
	    console.log('z is greater than 10');
	    break; 

	case 'less than 10':
	    console.log('z is less than 10');
	    break;
}


// Functions 

// Method 1
function sumUp (var1 = 0, var2 = 0) {
	return var1 + var2;
}

console.log(sumUp(22, 33));

// Method 2
function addNums(num1 = 1, num2 = 1) {
	return num1 + num2;
}
console.log(addNums());

// Method 3
const total = (num1 = 1, num2 = 1) => num1 + num2;

console.log(total(4, 9));


// Constructor function (In other languages, this is called a Class)
// This is a model called Person with the following attributes:

function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob); // new Date (variable) outputs the date in datetime formats
}

Person.prototype.getBirthYear = function() {
	return `${this.dob}`;
}

Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getInfo = function() {
	return `${this.firstName} ${this.lastName} ${this.dob} ${'....'}`;
}

// Alternative class Person
const robot = {
	firstName: 'Rubius',
	lastName: 'Hagrid',
	date: new Date(4-3-1980),
	email: 'rubius2Hagrid@hogwarts.co.uk',
	fullName: function () {
		console.log(`${this.firstName}-${this.lastName}`);
	}
};

console.log(robot.firstName);
console.log(robot.date);
console.log(robot.fullName());
console.log(robot.email);




// Instantiate object 
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');


console.log(person1.dob);
// .dob is an attribute  of Person so can be called to obtain its value.
console.log(person1.firstName);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
// getFullYear() has parentheses because it is a function...
// ...within the class Person. Its parentheses should remain null as it is.
// The reason being that it doesn't need parameters/arguments(values) to be invoked.
console.log(person1.dob.getFullYear());

console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person1.getInfo());


// Constructor function -- Student
function Student (name, grade, age, room) {
	this.name = name;
	this.grade = grade;
	this.age = age;
	this.room = room;
}
Student.prototype.getId = function() {
	return `${this.name}: ${this.age}: ${this.grade}: ${this.room}` 
}
Student.prototype.getRoom = function() {
	return `${this.name} can be found at ${this.room}.`
}
const student1 = new Student ('Martin', 'A+', 15, 'Room 234');
const student2 = new Student ('Renee', 'A*', 15.3, 'Room 111');


console.log(student1.name);
// .name is an attribute  of Student so can be called to obtain its value.
console.log(student1.grade);
console.log(student1.room);

console.log(student1.getId());
// getId() has parentheses because it is a  --function--  within the (class Student)
// It should remain null as it is. The reason being that it doesn't need a parameters(values) to be invoked.

console.log(student1.getRoom());


//--// Single element //--//
console.log(document.getElementsByClassName('wrapper'));
// Selects only a class called .wrapper from the html document it is linked to.

console.log(document.getElementById('form-box'));
// Selects only a id called #form-box from the html document it is linked to.

console.log(document.querySelector('#form-box'));
console.log(document.querySelector('h1'));
// Can select ids, classes...any tags. I recommend the use of this, but it is also
// important to know the above as well.

// Multiple Elements
// items.forEach((item) => console.log(item)); //--- To loop through "items"

// const ul = document.querySelector('.cat');

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innertext = 'Ussher';
// ul.lastElementChild.innerHTML = '<h1 style="color:teal;font-family:Brush Script MT,serif;">Hello</h1>';

// const submit = document.querySelector('.submit');

// submit.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.querySelector('.wrapper').style.opacity =
// 	'0';
// 	document.querySelector('.wrapper').style.transition =
// 	'2s';
// 	document.querySelector('body').classList.add('bg-dark');

// });




// Practise
let myList = ['Jon', 'Bruce', 'Lindsey', 'Titan', 'Clark'];

console.log(myList);

// myList.forEach((name) => console.log(name));


// 1- Nullify Trolls
let phrase = 'Who thinks he is stupid ?';

function killVowels (phrase) {
	let fit = '';
	let unfit = '';
   
    for(i = 0; i < phrase.length; i++) {
    	let letter = phrase[i];
    	if (letter.includes('a') || letter.includes('A')){
            unfit = unfit + letter;
	    }

	    else if (letter.includes('e') || letter.includes('E')){
	        unfit = unfit + letter;
	    }

	    else if (phrase[i].includes('i') || letter.includes('I')){
	        unfit = unfit + letter;
	    }

	    else if (phrase[i].includes('o') || letter.includes('O')){
	        unfit = unfit + letter;
	    }

	    else if (phrase[i].includes('u') || letter.includes('U')){
	        unfit = unfit + letter;
	    }

	    else {
	        fit = fit + letter;
	    }
	}

	console.log(fit);	
}

killVowels(phrase);



// 2- Hide the last 4 digits of a creditCard

let cardNum = 12323343433434344;

function maskify(cardNum) {
	let a = String(cardNum);
	let b = [];

	for (i = 0; i < a.length; i++) {
        b.push(a[i]);
    }

    for (j = 1; j < (b.length + 1); j++) {
    	b[(b.length) - j] = '*';

    	if (j === 4) {
    		break;
    	}
    }
    
    console.log(b.join(''));
}

maskify(cardNum);

// 3- kickOut will eliminate strings.

mixed_up = ['Charlize', 'Tanya', 'Jonas', 'Robert', 22, 15, 'Halle', 300, 111   ]

function kickOut(catalogue) {

	let integers = [];
	let alpha = [];
    
    for (i = 0; i < catalogue.length; i++) {
        if (typeof(catalogue[i]) == 'string') {
            alpha.push(catalogue[i]);
        } 

        else if (typeof(catalogue[i] == 'number')) {
            integers.push(catalogue[i]);
        }
    }

    console.log(integers);
}

kickOut(mixed_up);

// 4- Creating a profile

function Profile (name, alias, age, birthYear, highSchool, college, firstYear, gradYear, department, specialty) {
	this.name = name;
	this.age = age;
	this.birthYear = new Date(birthYear);
	this.highSchool = highSchool;
	this.college = college;
	this.firstYear = new Date(firstYear);
	this.department = department;
	this.specialty = specialty; 

	Profile.prototype.getBirthYear = function() {
        return `Born on ${this.getBirthYear}.`
	}

	Profile.prototype.getAlias = function() {
		return `Also called ${this.alias}.`
	}

	Profile.prototype.getEdu = function() {
		return `Attended ${this.highSchool} and entered ${this.college} and graduated in ${gradYear}.`
	}

	Profile.prototype.getCareer = function() {
		return `Works at the ${this.department} and specializes in ${this.specialty}.`
	}
}

const profile1 = new Profile('Jair K. Yeats', 'Sibyl', 24, 20-07-1998, 'Dresden High Schol', 'Hofstra University', 5-05-2015, 2019, 'Firearms & Ballistics Department', 'Tools Mark Examination');

console.log(profile1);
console.log(profile1.name);
console.log(profile1.birthYear);
console.log(profile1.college);
console.log(profile1.specialty);

console.log(profile1.getEdu());
console.log(profile1.getCareer());


// 5 - Find complementary dnaStrand
function dnaStrand(dna) {
	let a = [];

	// append each complementary to the null array.

	for(i = 0; i < dna.length; i++) {
		if (dna[i] === 'A') {
			a.push('T');
		} 

		else if (dna[i] === 'T') {
			a.push('A');
		}

		else if (dna[i] === 'G') {
			a.push('C');
		}

		else if (dna[i] === 'C') {
			a.push('G');
		}
	}

    console.log(a.join(''));
}


dnaStrand('ACAACCCGGGAGAGAGCCCGACCC');

// 6-- Count the number of A,C,G, and T in the DNA strand.

function count_nucleotides(dna) {
    let a = t = g = c = 0;

	for(i = 0; i < dna.length; i++) {
        
        if(dna[i] === 'A') {
        	a += 1;
        }

        else if(dna[i] === 'T') {
        	t += 1;
        }

        else if(dna[i] === 'G') {
        	g += 1;
        }

        else if(dna[i] === 'C') {
            c += 1;
        }
	}

	let total = `A: ${a} , T: ${t}, G: ${c}, C: ${c}`;
	console.log(total);
}

console.log('Ussher K.');

count_nucleotides('ACAACCCGGGAGAGAGCCCGACCCTTCGTACGGG');


// 7- Count the number of letters and integers in a string.
function countLettersAndIntegers (string) {
	alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let countOne = 0;
	let countTwo = 0;
	let s = 0;
	let  u = [];
	let v = [];
	let w = [];

   for (s; s < string.length; s++) {
   	u.push(string[s]);

   	if (alpha.includes(string[s])){
   		v.push(string[s]);
   		countOne += 1;
   	} else {
        w.push(string[s]);
        countTwo += 1;
   	}
   }  
   console.log(`There are ${countOne} letters and ${countTwo} integers in the string.`);
}
countLettersAndIntegers('MyName is 23304004040');

// 8- 







