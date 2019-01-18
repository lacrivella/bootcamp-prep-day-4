// eslint-disable-next-line
function greet() {
    
    // get the inputs by id (both first and last name)
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    

    // get values of input
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
   
    // make the string of the greeting
    var greeting = 'Hello ' + firstName + ' ' + lastName + '!';
    

    // display greeting
    var greeter = document.getElementById('greeter');
    greeter.textContent = greeting;


    // remove prompt
}

// TODO: validate name inputs
// TODO: clear inputs after greet?

