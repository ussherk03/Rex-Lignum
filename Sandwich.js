
// Math Object

console.log(Math);
console.log(Math.PI);

const area =  7.2;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));


// random numbers

const random  = Math.random();

console.log(random);

console.log(Math.round);


console.log('Ussher Kingsley');



// function expressions can be hoisted

// arrow function

const bill = (products, tax, total= 0, i = 0) => {
	while (i < products.length) {
		total += products[i] + products[i] * tax;
		i++;
	}

	return total;
}

console.log(bill([10,15,30], 0.2))

// object literals

const blogs = [ 
   { title: 'why mac & cheese rules', likes:30},
   { title: '10 things to make with marmite', likes: 50}
];

let user = {
	name:'crystal',
	age : 20,
	email :'crystal@thenetninja.co.uk',
	location: 'bulchenwald',
	blogs: [

	  { title: 'why mac & cheese rules', likes:30},
      { title: '10 things to make with marmite', likes: 50}

      ],
	// methods
	login(){
		console.log('The user is logged in.');
	},

	logout(){
		console.log('The user is logged out.');
	},

	logBlogs(){
       console.log(this.blogs);
       this.blogs.forEach(blog => console.log(blog));
	}
};

console.log(user.blogs);

let color = 'green';

console.log('Hello Visual Studio Code Editor');

const a = document.querySelector('.people');
console.log(a.length);
let ul = a.style.fontSize = '30px';

if (a.length > 4 || a.length < 6) {
   a.style.background = 'teal';
   a.style.width = '200px';
   a.style.margin = 'auto';
} else {
	a.style.border = '2px slategrey solid';
}

number = 'section';






