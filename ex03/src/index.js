generatorArray = [];

function* myGenerator(){
    yield* [1, 2, 3, 4, 5,];
    yield* 'Arena';
   yield* arguments;
}

   for (let i = 1; i < 8; i++){

   }

const iterator = myGenerator(6, 7, 8);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

module.exports = { generatorArray, myGenerator };
