// BUDGET CONTROLLER
let budgetController = (function () {
    // Creates Expense constructor (model)
    let Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Creates Income constructor (model)
    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Large Data Structure Where input are stored in categories

    let data = {
        // AllItems Stores instances in either 'exp' or 'inc'
        allItems: {
            exp: [],
            inc: [],
        },

        // Stores total 'exp' or 'inc' separately
        totals: {
            inc: 0,
            exp: 0
        }
    };

    return {
        addItem: function (type, des, val){
            let newItem, ID;

            // Creates new ID (in a sequential order) for any new income, or expense, Object
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }


            // Check if type belongs to array allItems[exp] or allItems[inc]
            if (type === 'exp') {
                // Create newItem
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                // Create newItem
                newItem = new Income(ID, des, val);
            }

            // Push it into my data structure (data)
            data.allItems[type].push(newItem); // [square brackets] selects array with either type 'inc' or 'exp'.

            // return new item
            return newItem;
            
        },

        testing: function () {
            console.log(data);
        }
    }

}) ();




// UI CONTROLLER
let UIController = (function () {

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },

        addListItem: function (obj, type) {
            let html, newHtml, element;
            // Create HTML template with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix"><div class="item__value">%value%</div>' +
                    '<div class="item__delete"><button class="item__delete--btn">' +
                    '<i class="fa fa-times-circle"></i></button></div></div></div>';

            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix"><div class="item__value">%value%</div>' +
                    '<div class="item__percentage">21%</div><div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="fa fa-times-circle"></i></button>' +
                    '</div></div></div>';

            }

            // Replace the placeholder text with some actual data.
            newHtml = html.replace('%id%', obj.type);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);


            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        getDOMStrings: function () {
            return DOMStrings;
        }
    }

}) ();

// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl=budgetController, UICtrl= UIController) {

    let setupEventListeners = function () {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    };


    let DOM = UICtrl.getDOMStrings();

    let ctrlAddItem = function () {
        let input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput();

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);

        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };

    return {
        init: function () {
            console.log('App has started');
            setupEventListeners();
        }
    }

}) ();

controller.init();
