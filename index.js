// Write your solution here!

const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver() {
  drivers.push('Ralph');
  return drivers;
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob');
  return drivers;
}

function destructivelyRemoveLastDriver() {
  drivers.pop('Garfield');
  return drivers;
}

function destructivelyRemoveFirstDriver() {
  drivers.shift('Milo');
  return drivers;
}

//the below do not mutate the original array, returns a new array.

function appendDriver() {
  return [...drivers, 'Broom'];
}

function prependDriver() {
  return['Arnold', ...drivers];
}

function removeLastDriver() {
  return drivers.slice(0,2);
}

function removeFirstDriver() {
  return drivers.slice(1);
}

