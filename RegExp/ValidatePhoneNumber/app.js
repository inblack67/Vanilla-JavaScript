let re = /[0-9]{10}/;

let phone = '9679908387'

if(re.test(phone))
{
  console.log('valid');
}

else
{
  console.log('invalid');
}