const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');
const alertInput = document.querySelector('#ion-alert-controller');

let myTotalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

//clear input of reason and amount event
cancelButton.addEventListener('click', clear);

//add Expenses button event
addButton.addEventListener('click',()=>{
    
    const reasonEntered = reasonInput.value;
    const amountEntered = amountInput.value;

    if(reasonEntered.trim().length <= 0 || 
    amountEntered <= 0 || 
    amountEntered.trim().length <= 0){

        alert("Please input reason and amount");
       /* alertInput.create({
            message: 'Please enter valid reason and amount!',
            header: 'Invalid input',
            buttons: ['Ok']
        })
        .then(alterElement => {
            alertElement.present();
        });*/

        return;
    }

    console.log(reasonEntered, amountEntered);

    const newExpenses = document.createElement('ion-item');
    newExpenses.textContent = reasonEntered + ': P' + amountEntered;
    expensesList.appendChild(newExpenses);

    myTotalExpenses += +amountEntered;
    totalExpenses.textContent = myTotalExpenses;

    clear();
});

