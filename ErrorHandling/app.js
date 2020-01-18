try
{
  // myFunc();
  console.log(eval('45/5')); // evaluates js in string

  console.log(eval('ontw'));

  throw 'errrrrr';
  throw new ReferenceError('fppk');

}

catch(e)
{
  console.log(e);

  console.log(e.message); // meat

  console.log(e.name); // name of the e

  console.log(e instanceof ReferenceError); // true

  console.log(e instanceof TypeError);
  // false


}

finally
{
  console.log('runs no matter wat');
}

console.log('prog cont.');