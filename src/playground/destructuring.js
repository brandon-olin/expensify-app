// Object Destructuring

// const person = {
//   age: 31,
//   location: {
//     city: 'Denver',
//     temp: 92
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age} years old.`);

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { title, author } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName)

// Array Destructuring

// const address = ['837 Lowell Blvd', 'Denver', 'Colorado', '80204'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , medium] = item;

console.log(`A medium ${itemName} is ${medium}.`)