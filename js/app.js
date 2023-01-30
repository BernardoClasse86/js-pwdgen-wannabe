// Link the HTML id to our JS variable
console.log ('link to password-generator id');
const passwordGen = document.getElementById('password-generator')

console.log(passwordGen.innerHTML)


// Ask user his/her name

let name;
name = prompt('Add your Name');
console.log('name variable is = ', name);


// Ask user his/her last_name

let last_name;
last_name = prompt('Add your Last Name');
console.log('last_name variable is = ', last_name);


// Ask user his/her favourite color

let fav_color;
fav_color = prompt('Add your Favourite Color');
console.log('fav_color variable is = ', fav_color);


// Ask user his/her favourite number

let fav_number;
fav_number = prompt('Add your Favorite Number');
console.log('fav_number variable is = ', fav_number);


// Create a password that match all the result given by name, surname, favourite color and favourite number

console.log('editing innerHTML of passwordGen to create the password');
passwordGen.innerHTML = name + last_name + fav_color + fav_number;
