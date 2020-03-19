let re;
// literal chars
re = /hello/;
re = /hello/i;

// metachar symbols
re = /^h/i; // must start with
re = /worlds$/i; // must start with
re = /^hello$/i; // must only be hello 
re = /h.llo/i; // matches anyone char
re = /h*llo/i; // any char zero or more times (nothing + all)

re = /gre?a?y/i; // a is optional e is optional

re = /gre?a?y\?/i; // escape char (prefix)


// ----------------------------

// BRACKETS [] - char sets
re = /gr[ae]y/i; // a or e
// better soln as the above one would have allowed gry too

re = /[GF]ray/i;
re = /[^GF]ray/i; // anything but them
re = /^[GF]ray/i; // starts
re = /[A-Z]ray/; // any uppcase letter
re = /[A-Za-z]ray/; // any letter upper or lower
re = /[0-9]ray/; // a;; digits


// ----------------------------

// Braces {} - Quantifiers
re = /hel{2}o/i; // exactly 2 ls
re = /hel{1,4}o/i; // one to four ls
re = /hel{2,}o/i; // at least two times


// ----------------------------

// Parenthesis () - Grouping
re = /([0-9]x){3}/i;


// ----------------------------

// Shorthand character classes
re = /\w/;  // word char - alphanumeric or _
re = /\w+/;  // + - one or more
re = /\W/;  // Non word char or _
re = /\d/; // any digit, first one
re = /\d+/; // any digit, all of them 
re = /\D/; // non digits
re = /\s/; // match whitespace
re = /\S/; // no whitespace


re = /Hell\b/i;   // word boundry

// ----------------------------

// Assertions
re = /x(?=y)/; // match x only if followed by y, anywhere!
re = /x(?!y)/; // match x  if NOT followed by y, anywhere!






// string to be matched
const str = 'hello wxorlds hell';


// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str)
{
  if(re.test(str))
  {
    console.log(`${str} matches ${re.source}`);
  }
  else
  {
    console.log(`${str} does not ${re.source}`);
  }
}

reTest(re,str);