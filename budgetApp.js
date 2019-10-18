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

    let calculateTotal = function (type) {
        let sum = 0;
        // summation of either type 'inc' or 'exp'
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    let data = {
        // AllItems Stores instances in either 'exp' or 'inc'
        allItems: {
            exp: [],
            inc: []
        },

        // Stores total 'exp' or 'inc' separately
        totals: {
            inc: 0,
            exp: 0
        },

        // Budget: Income - Expenses
        budget: 0,

        // Percentage
        percentage: -1,
    };

    return {
        addItem: function (type, des, val){
            let newItem, ID = 0;

            // Creates new ID (in a sequential order) for any new income, or expense, Object
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Checks if type belongs to array allItems[exp] or allItems[inc]
            if (type === 'exp') {
                // Creates newItem
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                // Creates newItem
                newItem = new Income(ID, des, val);
            }

            // Push it into my data structure (data)
            data.allItems[type].push(newItem); // [square brackets] selects array with either type 'inc' or 'exp'.

            // return new item
            return newItem;

        },

        deleteItem: function(type, id) {
            let ids, index;
            ids = data.allItems[type].map(function(currentElement) {
                return currentElement.id;
            });

            index = ids.indexOf(id);

            if (index !== - 1) {
                //  Removes item using the splice(index, number of elements to remove)
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function () {

            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget: income - expense
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) *  100);
            } else {
                data.percentage = -1;
            }
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage,
            }
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
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        fullYear: '.budget__title--month',
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },


        addListItem: function (obj, type) {
            let html, newHtml, element;
            // Create HTML template with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix"><div class="item__value">%value%</div>' +
                    '<div class="item__delete"><button class="item__delete--btn">' +
                    '<i class="fa fa-times-circle"></i></button></div></div></div>';

            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix"><div class="item__value">%value%</div>' +
                    '<div class="item__percentage">21%</div><div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="fa fa-times-circle"></i></button>' +
                    '</div></div></div>';

            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);


            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        deleteListItem: function (selectedID) {
            let el = document.getElementById(selectedID);
            el.parentNode.removeChild(el);
        },

        // Clear input fields after logging 'description' and 'value' into the DOM
        clearFields: function () {
            let fields, fieldsArr;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
            });

            fieldsArr[0].focus();
            
        },

        displayBudget: function (obj) {

            document.querySelector(DOMStrings.budgetLabel).textContent = '$ ' + obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = '+ ' + obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = '- ' + obj.totalExp;

            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        },

        changeType: function () {
            fields = document.querySelectorAll(`${DOMStrings.inputType}, ${DOMStrings.inputValue}, ${DOMStrings.inputDescription}`);
            console.log(fields);

            fields.forEach(function(field) {

                field.classList.toggle('red-focus');
            });

            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
        },

        getDOMStrings: function () {
            return DOMStrings;
        }
    }

}) ();




// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl=budgetController, UICtrl= UIController) {

    let DOM = UICtrl.getDOMStrings();

    let setupEventListeners = function () {

        // Updates the Month and Year
        window.addEventListener('load', function () {
            let arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let now = new Date ();
            let fullYear = now.getFullYear();
            let fullMonth = now.getMonth();
            document.querySelector('.budget__title--month').textContent = `${arrMonth[fullMonth]} ${fullYear}`;
        });
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
    }


    // UpdateBudget will run every major Ctrl in the script

    let updateBudget = function () {
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        let budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);

    };


    let ctrlAddItem = function () {
        let input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate AND update budget
            updateBudget();

            // 6. Display the budget on the UI


        }
    };

    let ctrlDeleteItem = function (event) {
        let splitID, type, ID;
        let itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);

        if (itemID) {
            splitID = itemID.split('-');
            console.log(splitID);
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);

            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // 3. Update and show the new budget
            updateBudget();
        }
    };

    return {
        init: function () {
            console.log('App has started');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0,
            });

            setupEventListeners();
        }
    }

}) ();

controller.init();


// Styles


