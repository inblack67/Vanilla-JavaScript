// ITERATORS

// function nameIterator(names)
// {
//   let i = 0;
//   return {
//     next: function(){
//       return i<names.length ?
//       {value: names[i++], done: false}  :
//       {done: true}
//     }
//   }
// }

// const namesArr = ['Lorem', 'Ipsum'];
// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);

// -----------------------------------

// GENERATORS

function* sayNames()
{
  yield 'Lorem',
  yield 'Ipsum'
}

const names = sayNames();
console.log(names.next());
console.log(names.next().value);
console.log(names.next());