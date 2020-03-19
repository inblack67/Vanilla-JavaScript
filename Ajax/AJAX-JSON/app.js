// gettin' a customer

document.querySelector('#button1').addEventListener('click',getCustomer);

document.querySelector('#button2').addEventListener('click',getCustomers);

function getCustomer()
{
const xhr = new XMLHttpRequest();

xhr.open('GET','customer.json',true);

xhr.onload = 
function()
{
if(this.status===200)
{
const customer = JSON.parse(this.responseText);

// gettin' customer
document.querySelector('#customer').innerHTML = 
`
<ul>
<li>Id: ${customer.id}</li>
<li>Name: ${customer.name}</li>
<li>Email: ${customer.email}</li>
</ul>
`
}
}

xhr.send();
}


// ==========================

//gettin' customers

function getCustomers()
{
const xhr = new XMLHttpRequest();

xhr.open('GET','customers.json',true);

xhr.onload = 
function()
{
if(this.status===200)
{
const customers = JSON.parse(this.responseText);

let output='';

customers.forEach(function(customer){

output +=
`<ul>
<li>Id: ${customer.id}</li>
<li>Name: ${customer.name}</li>
<li>Email: ${customer.email}</li>
</ul>
`;
});

document.querySelector('#customers').innerHTML = output;
}
}


xhr.send();
}