function countVowels(str)
{
  var vow = str.match(/[aeiou]/gi);
  console.log(vow.length);
}

countVowels('aeiou');